import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const MENU_LIST = [{
    name: '通知中心',
    icon: 'mail',
    children: [{
        code: 1000,
        name: '审批管理',
        url: '/sign-in'
    }]
}, {
    name: '页面中心',
    icon: 'file-text',
    children: [{
        code: 10011000,
        name: '模板管理',
        url: '/pagecenter/templates'
    }, {
        code: 10011001,
        name: '首页装修',
        url: '/pagecenter/home',
        target: '_blank'
    }]
}, {
    name: '商品中心',
    icon: 'shopping',
    children: [{
        code: 10001000,
        name: '商品管理',
        url: '/trade/spu'
    }, {
        code: 10001005,
        name: '添加商品',
        url: '/'
    }]
}, {
    name: '促销中心',
    icon: 'profile',
    children: [{
        code: 10031000,
        name: '优惠券管理',
        url: '/sale/coupon'
    }]
}, {
    name: '订单中心',
    icon: 'profile',
    children: [{
        code: 10061000,
        name: '订单管理',
        url: '/test'
    }]
}];

class Sider extends React.Component {
    state = {
        theme: 'dark',
        menus: MENU_LIST
    };

    handleClick = (menu) => {
        this.setState({
            current: menu.code + '',
        });
        if (menu.url) {
            if (menu.target) {
                window.open(/^https?:\/\//.test(menu.url)
                    ? menu.url
                    : ('?frame=0#' + menu.url), menu.target);
            } else {
                location.hash = menu.url;
            }
        }
    };

    render() {
        return (
            <>
                <div className="nc-app-header-logo flex jc_c"><p style={{ marginRight: 20 }}><Icon type="bar-chart" /> 后台管理系统</p></div>
                <div className="fx_1 h_1x">
                    <Menu
                        theme={this.state.theme}
                        style={{ width: '100%', height: '100%', overflow: 'auto' }}
                        defaultOpenKeys={['通知中心', '页面中心']}
                        selectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <Menu.Item
                            key="home"
                            onClick={() => {
                                location.hash = "/";
                                this.setState({
                                    current: 'home',
                                });
                            }}
                        >
                            <span>
                                <Icon type="home" />
                                <span>首页</span>
                            </span>
                        </Menu.Item>
                        {
                            this.state.menus.map((menu) => (
                                menu.children && menu.children.length
                                    ? (
                                        <SubMenu
                                            key={menu.name}
                                            title={
                                                <span>
                                                    <Icon type={menu.icon} />
                                                    <span>{menu.name}</span>
                                                </span>
                                            }
                                        >
                                            {
                                                menu.children.map(subMenu => (
                                                    <Menu.Item
                                                        key={subMenu.code}
                                                        onClick={this.handleClick.bind(this, subMenu)}
                                                    >{subMenu.name}</Menu.Item>
                                                ))
                                            }
                                        </SubMenu>
                                    )
                                    : null
                            ))
                        }
                    </Menu>
                </div>
            </>
        );
    }
}

function renderMenu(props, container) {
    container.classList.add('nc-app-sider');
    ReactDOM.render(<Sider {...props}></Sider>, container);

    const menu = {
        visible: false,
        show: () => {
            if (!menu.visible) {
                menu.visible = true;
                container.classList.add('nc-app-sider-visible');
            }
        },
        hide: () => {
            if (menu.visible) {
                menu.visible = false;
                container.classList.remove('nc-app-sider-visible');
            }
        }
    };
    return menu;
}

export { renderMenu };