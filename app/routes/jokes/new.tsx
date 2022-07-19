import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/session.server";
import { db } from "~/utils/db.server";

export const action: ActionFunction = async ({
    request,
}) => {
    const userId = await requireUserId(request);
    const form = await request.formData();
    const name = form.get("name");
    const content = form.get("content");
    if (
        typeof name !== "string" ||
        typeof content !== "string"
    ) {
        throw new Error(`Form not submitted correctly.`);
    }

    const fields = { name, content };

    const joke = await db.joke.create({ data: { ...fields, jokesterId: userId }, });
    return redirect(`/jokes/${joke.id}`);
};

export default function New() {
    return (
        <>
            <p>Add your own hilarious joke</p>
            <form method="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <br />

                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" />
                <br />
                <button type="submit" className="button">
                    Add
                </button>
            </form>
        </>
    )
}