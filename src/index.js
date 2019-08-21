import { env as mainEnv } from "snowball";
import { createApplication } from "snowball/app";
import { Server } from "sn-cornerstone";
import "./sass/style.scss";
import router from "./app/router";
import * as projectEnv from "./env";
import { renderFrame } from "./app/frame/renderFrame";

const env = {
    ...mainEnv,
    ...projectEnv
};
const { PROJECTS } = projectEnv;

const projects = {
    "^/pagecenter/": PROJECTS.PYRAMID,
    "^/trade/": PROJECTS.TRADE
};

const authServer = new Server({
    baseUri: '/auth_server'
});

const marketServer = new Server({
    baseUri: '/market_server'
});

const tradeServer = new Server({
    baseUri: '/trade_server'
});

const frame = renderFrame({
    header: document.getElementById('header'),
    menu: document.getElementById('menu')
});

window.SNOWBALL_MAIN_APP = {
    env
};

createApplication({
    projects,
    routes: router,
    autoStart: true,
    extend() {
        return {
            authServer,
            marketServer,
            tradeServer,
            frame,
            env
        };
    },
    options: {
        disableTransition: true
    }
}, document.getElementById('root'), () => {
    if (!(/^(#)?\/sign-in/.test(location.hash)) && !/[&?]frame=0/.test(location.search)) {
        frame.show();
    }
    console.log('application start!');
});