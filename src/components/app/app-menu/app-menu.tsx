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
    icon: () => <i class="icon-home"></i>
  }]
  componentWillLoad() { }
  render() {
    return (
      <Host>
        <cdp-menu config={{ width: "260px" }}>
          <div class="grid bg-white bg-opacity-80 h-full w-full p-4">
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
