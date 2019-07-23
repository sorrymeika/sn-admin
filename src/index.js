import { createApplication } from "snowball/app";
import "./sass/style.scss";
import router from "./app/router";
import { Server } from "./utils/Server";

const projects = {
};

const server = new Server({
    baseUri: 'http://127.0.0.1:7001'
});

createApplication({
    projects,
    routes: router,
    autoStart: true,
    extend() {
        return {
            server
        };
    },
    options: {
        disableTransition: true
    }
}, document.getElementById('root'), () => {
    console.log('application start!');
});
