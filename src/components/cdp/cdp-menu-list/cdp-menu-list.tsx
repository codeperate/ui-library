import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpMenuListConfig } from './cdp-menu-list.interface';
@Component({
    tag: 'cdp-menu-list'
})
export class CdpMenuList {
    defaultConfig: CdpMenuListConfig = {
        menuItems: [],
        anchorPropsFn: null,
        classList: {
            host: "grid grid-cols-1 auto-rows-min",
            menuItem: "py-2 px-4 hover:bg-light-blue-600 hover:text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4",
            menuItemActive: "py-2 px-4 bg-light-blue-600 text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4",
            subMenuItem: "w-full flex p-1 hover:bg-blue-500 hover:text-white items-center justify-start rounded-md",
            subMenuItemActive: "bg-blue-500 text-white active"
        }
    }
    @Element() rootEl: HTMLCdpMenuListElement
    @Prop() config!: CdpMenuListConfig
    @State() _config: CdpMenuListConfig
    componentWillLoad() {
        this._config = deepAssign(this.config, this.defaultConfig)
    }
    render() {
        const { classList, anchorPropsFn, menuItems } = this._config;
        const activePath = location.pathname
        return (
            <Host class={classList.host}>
                {menuItems.map(({ href, name, isActive, icon, indicator }) => {
                    let active = isActive ? isActive(activePath) : activePath.startsWith(href);
                    return <a {...anchorPropsFn(href)} class={active ? classList.menuItemActive : classList.menuItem}>
                        {icon ? icon(active) : ""}{name}{indicator ? indicator(active) : ""}
                    </a>
                })}
            </Host>
        );
    }

}
