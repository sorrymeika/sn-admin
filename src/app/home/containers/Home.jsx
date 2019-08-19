import React from "react";
import { Upload } from "antd";

export default function Home({ onButtonClick, toSignIn }) {
    return (
        <div>
            Home
            <br />
            <Upload
                name={'image'}
                action={'http://localhost:7001/admin/testUpload'}
            >
                Upload
            </Upload>
            <br />
            <button onClick={onButtonClick}>Click me to `Test`!</button>
            <br />
            <button onClick={toSignIn}>Click me to `sign-in`!</button>
        </div>
    );
}
