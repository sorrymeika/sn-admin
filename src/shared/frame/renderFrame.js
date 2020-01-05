import renderHeader from "./renderHeader";
import renderMenu from "./renderMenu";

export function renderFrame({
    header: headerEl,
    menu: menuEl,
    app
}) {
    const header = renderHeader({
        onMenuClick() {
            menu.visible
                ? menu.hide()
                : menu.show();
        }
    }, headerEl, app);
    const menu = renderMenu({}, menuEl, app);

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