import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/jokes.css";

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Jokes() {
    return (
        <>
            <p>Heres a random joke:</p>
            <p>I was wondering why the frisbee was getting bigger, then it hit me</p>
        </>
    )
}