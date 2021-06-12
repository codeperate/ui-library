import { Component, Element, h, Host } from '@stencil/core';
import { CdpMenuItem } from '../../cdp/cdp-menu-list/cdp-menu-list.interface';

@Component({
  tag: 'app-menu',
})
export class AppMenu {
  @Element() rootEl: HTMLAppRootElement;
  menuItem: CdpMenuItem[] = [{
    name: "Home",
    href: "/",
    icon: () => <i class="fas fa-home"></i>
  }]
  componentWillLoad() { }
  render() {
    return (
      <Host>
        <cdp-menu config={{ width: "280px" }}>
          <div class="grid auto-rows-min bg-white bg-opacity-80 h-full w-full p-4 gap-4 border-r">
            <div class="grid grid-cols-[50px,1fr,max-content] items-center gap-2">
              <img src="/assets/icon-color.svg"></img>
              <span class="text-2xl font-extrabold text-light-blue-700">Codeperate</span>
              <div class="w-10 h-10 rounded-lg bg-light-blue-600 text-white items-center font-extrabold text-3xl p-1">UI</div>
            </div>
            <cdp-menu-list config={{
              menuItems: this.menuItem,
              anchorPropsFn: (href) => ({ href: href })
            }}></cdp-menu-list>
          </div>
        </cdp-menu>
      </Host>
    );
  }
}
