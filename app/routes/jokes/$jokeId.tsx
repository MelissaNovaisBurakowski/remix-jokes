import { Joke as IJoke } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { db } from "~/utils/db.server";

type LoaderData = {
	joke: IJoke | null;
};

export const loader: LoaderFunction = async ({ params }) => {
	const data: LoaderData = {
		joke: await db.joke.findUnique({
			where: { id: params.jokeId },
		})
	};
	return json(data);
};

export function ErrorBoundary() {
	const { jokeId } = useParams();
	return (
		<div className="error-container">{`There was an error loading joke by the id ${jokeId}. Sorry.`}</div>
	);
}

export default function Joke() {
	const data = useLoaderData<LoaderData>();
	// throw new Error("Testing Error Boundary");
	return <>
		<p>Here's your hilarious joke:</p>
		<p>{data?.joke?.name}</p>
		<p>
			{data?.joke?.content}
		</p>
	</>
}