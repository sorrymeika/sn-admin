import { createApplication } from "snowball/app";
import "./sass/style.scss";
import router from "./app/router";
import { Server } from "sn-cornerstone";
import { renderFrame } from "./app/frame/renderFrame";


const projects = {
};

const authServer = new Server({
    baseUri: '/auth_server'
});

const frame = renderFrame({
    header: document.getElementById('header'),
    menu: document.getElementById('menu')
});

createApplication({
    projects,
    routes: router,
    autoStart: true,
    extend() {
        return {
            authServer,
            frame
        };
    },
    options: {
        disableTransition: true
    }
}, document.getElementById('root'), () => {
    if (!(/^(#)?\/sign-in/.test(location.hash))) {
        frame.show();
    }
    console.log('application start!');
});