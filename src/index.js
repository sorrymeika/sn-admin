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
import UserService from "./shared/services/UserService";

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
    baseUrl: env.API_URL + '/auth_server'
});

const marketServer = new Server({
    baseUrl: env.API_URL + '/market_server'
});

const tradeServer = new Server({
    baseUrl: env.API_URL + '/trade_server'
});

const sellerServer = new Server({
    baseUrl: env.API_URL + '/seller_server'
});

Page.extentions.react({
    Provider: ({ children }) => {
        return <LocaleProvider locale={zhCN}>{children}</LocaleProvider>;
    }
});

window.SNOWBALL_MAIN_APP = createApplication({
    projects,
    routes: router,
    autoStart: true,
    extend() {
        return {
            env,
            sfs: new Sfs(process.env.REACT_APP_SFS_URL),
            server: {
                auth: authServer,
                market: marketServer,
                trade: tradeServer,
                seller: sellerServer
            },
            services: {
                user: UserService
            }
        };
    },
    options: {
        disableTransition: true
    }
}, document.getElementById('root'), (app) => {
    const isSignInUrl = (url) => /^(#)?\/sign-in/.test(url);
    const shouldShowFrame = (url) => !isSignInUrl(url) && !/[&?]frame=0/.test(location.search);

    const frame = renderFrame({
        header: document.getElementById('header'),
        menu: document.getElementById('menu')
    });

    if (shouldShowFrame(location.hash)) {
        frame.show();
    }

    Page.extentions.lifecycle({
        initialize() {
            this.on('beforeshow', () => {
                if (shouldShowFrame(this.ctx.location.path)) {
                    frame.show();
                } else {
                    frame.hide();
                }
            });
        }
    });

    if (!isSignInUrl(location.hash)) {
        app.service.user.loadMyAccount()
            .catch(e => {
                if (e.code == 10002) {
                    app.navigation.forward('/sign-in');
                }
            });
    }

    console.log('application start!');
});