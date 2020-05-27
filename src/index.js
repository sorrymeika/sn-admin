import React from "react";
import { LocaleProvider } from "antd";
import zhCN from 'antd/es/locale-provider/zh_CN';
import { env as mainEnv } from "snowball";
import { createApplication, Page } from "snowball/app";
import { AppConfiguration, Sfs } from "sn-cornerstone";
import "./sass/style.scss";
import router from "./app/router";
import * as projectEnv from "./env";
import { renderFrame } from "./shared/frame/renderFrame";

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

Page.extentions.react({
    Provider: ({ children }) => {
        return <LocaleProvider locale={zhCN}>{children}</LocaleProvider>;
    }
});

window.SNOWBALL_MAIN_APP = createApplication({
    projects,
    routes: router,
    configuration: AppConfiguration,
    extend() {
        return {
            env,
            sfs: new Sfs(process.env.REACT_APP_SFS_URL)
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
        menu: document.getElementById('menu'),
        app
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
        const userService = app.autowired('userService');
        userService.loadMyAccount()
            .catch(e => {
                if (e.code == -360) {
                    app.navigation.forward('/sign-in');
                }
            });
    }

    console.log('application start!');
});