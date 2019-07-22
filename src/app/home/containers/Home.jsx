import React from "react";

export default function Home({ onButtonClick, toSignIn }) {
    return (
        <div>
            Home
            <button onClick={onButtonClick}>Click me to `Test`!</button>
            <button onClick={toSignIn}>Click me to `sign-in`!</button>
        </div>
    );
}
