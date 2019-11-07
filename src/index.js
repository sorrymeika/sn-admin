import React from "react";
import { LocaleProvider } from "antd";
import zhCN from 'antd/es/locale-provider/zh_CN';
import { env as mainEnv } from "snowball";
import { createApplication, Page } from "snowball/app";
import { Server, Sfs } from "sn-cornerstone";
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
    "^/trade/": PROJECTS.TRADE,
    "^/seller/": PROJECTS.SELLER
};

const authServer = new Server({
    baseUrl: '/auth_server'
});

const marketServer = new Server({
    baseUrl: '/market_server'
});

const tradeServer = new Server({
    baseUrl: '/trade_server'
});

const sellerServer = new Server({
    baseUrl: '/seller_server'
});

const frame = renderFrame({
    header: document.getElementById('header'),
    menu: document.getElementById('menu')
});

window.SNOWBALL_MAIN_APP = {
    env
};

class UserService {
}

Page.extentions.react({
    Provider: ({ children }) => {
        return <LocaleProvider locale={zhCN.default}>{children}</LocaleProvider>;
    }
});

createApplication({
    projects,
    routes: router,
    autoStart: true,
    extend() {
        return {
            frame,
            env,
            sfs: new Sfs(process.env.REACT_APP_SFS_URL),
            server: {
                auth: authServer,
                market: marketServer,
                trade: tradeServer,
                seller: sellerServer
            },
            services: [UserService]
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