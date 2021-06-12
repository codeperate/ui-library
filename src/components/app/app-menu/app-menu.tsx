import { Component, Element, h, Host } from '@stencil/core';
import { CdpMenuItem } from '../../cdp/cdp-menu-list/cdp-menu-list.interface';
import { href as _href } from 'stencil-router-v2'
import { router } from '../../../global/app';
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
        <cdp-menu config={{ width: "260px" }}>
          <div class="grid auto-rows-min bg-white bg-opacity-80 h-full w-full p-4 gap-4 border-r">
            <div class="grid grid-cols-[40px,1fr,max-content] items-center gap-2 py-6">
              <img src="/assets/icon-color.svg"></img>
              <span class="text-2xl font-extrabold text-light-blue-700">Codeperate</span>
              <div class="w-9 h-9 rounded-lg bg-light-blue-600 text-white font-extrabold text-xl text-center p-1">UI</div>
            </div>
            <cdp-menu-list config={{
              menuItems: this.menuItem,
              anchorPropsFn: (href) => (_href(href, router))
            }}></cdp-menu-list>
          </div>
        </cdp-menu>
      </Host>
    );
  }
}
