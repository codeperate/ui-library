import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpMenuListConfig, CdpMenuListProps } from './cdp-menu-list.interface';
import { pathToRegexp } from 'path-to-regexp';
@Component({
  tag: 'cdp-menu-list',
})
export class CdpMenuList {
  defaultConfig: CdpMenuListConfig = {
    menuItems: [],
    anchorPropsFn: null,
    classList: {
      host: 'grid grid-cols-1 gap-y-2 auto-rows-min',
      menuItem: 'py-2 px-4 hover:bg-light-blue-600 hover:text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4 cursor-pointer',
      menuItemActive: 'py-2 px-4 bg-light-blue-600 text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4 cursor-pointer',
      subMenuItem: 'py-1 px-4 hover:bg-light-blue-600 hover:text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4',
      subMenuItemActive: 'py-1 px-4 bg-light-blue-600 text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4',
      subMenuWrapper: 'grid grid-cols-1 gap-y-1 mt-2 pl-4',
    },
  };
  @Element() rootEl: HTMLCdpMenuListElement;
  @Prop() props!: CdpMenuListProps;
  @Prop() config!: CdpMenuListConfig;
  @State() _config: CdpMenuListConfig;
  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
  }
  isActive(href: string, activePath: string) {
    const regex = pathToRegexp(href);
    if (activePath.match(regex)) return true;
    return false;
  }
  render() {
    const { classList, anchorPropsFn, menuItems } = this._config;
    const activePath = this.props.activePath;
    return (
      <Host class={classList.host}>
        {menuItems.map(({ name, isActive, icon, indicator, ...props }) => {
          let href = props['href'];
          let expand = props['expand'];
          let active = isActive ? isActive(activePath) : this.isActive(href, activePath);
          if (props['nested'])
            return (
              <cdp-accordion props={{ display: expand ? expand : active }} config={{ toggle: !href }}>
                <a slot="accordion" class={active ? classList.menuItemActive : classList.menuItem} {...(href ? anchorPropsFn(href) : {})}>
                  {icon ? icon(active) : ''}
                  {name}
                  {indicator ? indicator(active) : ''}
                </a>
                <div class={classList.subMenuWrapper}>
                  {props['nested'].map(({ name, href, indicator, icon, isActive }) => {
                    let active = isActive ? isActive(activePath) : this.isActive(href, activePath);
                    return (
                      <a {...anchorPropsFn(href)} class={active ? classList.subMenuItemActive : classList.subMenuItem}>
                        {icon ? icon(active) : ''}
                        {name}
                        {indicator ? indicator(active) : ''}
                      </a>
                    );
                  })}
                </div>
              </cdp-accordion>
            );
          return (
            <a {...anchorPropsFn(href)} class={active ? classList.menuItemActive : classList.menuItem}>
              {icon ? icon(active) : ''}
              {name}
              {indicator ? indicator(active) : ''}
            </a>
          );
        })}
      </Host>
    );
  }
}
