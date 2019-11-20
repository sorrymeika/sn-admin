import renderHeader from "./renderHeader";
import { renderMenu } from "./renderMenu";

export function renderFrame({
    header: headerEl,
    menu: menuEl
}) {
    const header = renderHeader({
        onMenuClick() {
            menu.visible
                ? menu.hide()
                : menu.show();
        }
    }, headerEl);
    const menu = renderMenu({}, menuEl);

    return {
        header,
        menu,
        show: () => {
            header.show();
            menu.show();
        },
        hide: () => {
            header.hide();
            menu.hide();
        }
    };
}