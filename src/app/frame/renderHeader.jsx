import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'antd';

class Header extends React.Component {
    state = {
        current: '1',
    };

    render() {
        const { onMenuClick } = this.props;
        return (
            <>
                <div className="fx_1 pl_l">
                    <Icon
                        type="menu"
                        onClick={onMenuClick}
                    ></Icon>
                </div>
                <div className="pr_l flex">
                    <span className="fs_s mr_m">系统管理员</span>
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

export { renderHeader };