import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';
import { inject, autowired } from 'snowball/app';

@inject(() => {
    const userService = autowired('userService');
    return {
        account: userService.account
    };
})
class Header extends React.Component {
    render() {
        const { onMenuClick, account } = this.props;

        console.log('asfsf');
        return (
            <>
                <div className="fx_1 pl_l">
                    <Icon
                        type="menu"
                        onClick={onMenuClick}
                    ></Icon>
                </div>
                <div className="pr_l flex">
                    <div className="fs_s mr_m">
                        {
                            !account
                                ? (
                                    <a href="#/sign-in" style={{ color: '#fff' }}>[登录]</a>
                                )
                                : (
                                    <>
                                        <span className="mr_s">{account.role == 1 ? '超级管理员' : (account.name || '管理员')}</span>
                                        <a href="#/sign-in" style={{ color: '#fff' }}>[注销]</a>
                                    </>
                                )
                        }
                    </div>
                    <Icon type="setting"></Icon>
                </div>
            </>
        );
    }
}

function renderHeader(props, container) {
    container.classList.add('nc-app-header');
    ReactDOM.render(<Header {...props}></Header>, container);

    const header = {
        visible: false,
        show: () => {
            header.visible = true;
            container.classList.add('nc-app-header-visible');
        },
        hide: () => {
            if (header.visible) {
                header.visible = false;
                container.classList.remove('nc-app-header-visible');
            }
        }
    };
    return header;
}

export default renderHeader;