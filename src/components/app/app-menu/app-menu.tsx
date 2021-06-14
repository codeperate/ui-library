import { Component, Element, h, Host, State } from '@stencil/core';
import { CdpMenuItem } from '../../cdp/cdp-menu-list/cdp-menu-list.interface';
import { href as _href } from 'stencil-router-v2'
import { router } from '../../../global/app';
import { CdpMenuProps } from '../../cdp/cdp-menu/cdp-menu.interface';
@Component({
  tag: 'app-menu',
})
export class AppMenu {
  @Element() rootEl: HTMLAppRootElement;
  menuItem: CdpMenuItem[] = [{
    name: "Home",
    href: "/",
    icon: () => <i class="fas fa-home"></i>,
  },
  {
    name: "Change Log",
    href: "/change-log",
    icon: () => <i class="fas fa-edit"></i>,
  },
  {
    name: "UI Components",
    isActive: (path) => path.startsWith("/components"),
    icon: () => <i class="far fa-object-ungroup"></i>,
    indicator: () => <i class="fas fa-chevron-right expanded:transform expanded:rotate-90 transition-all"></i>,
    nested: [
      {
        name: "Menu",
        href: "/components/cdp-menu",
      },
      {
        name: "Menu List",
        href: "/components/cdp-menu-list"
      },
      {
        name: "Accordion",
        href: "/components/cdp-accordion"
      },
      {
        name: "Modal",
        href: "/components/cdp-modal"
      }
    ]
  }]
  @State() activePath = router.activePath;
  componentWillLoad() {
    router.onChange("activePath", (path) => {
      this.activePath = path
      this.menuProps = { display: false }
    })
  }
  @State() menuProps: CdpMenuProps;
  render() {
    const activePath = this.activePath;
    return (
      <Host>
        <cdp-menu config={{ width: "260px" }} props={this.menuProps}>
          <div class="grid auto-rows-min bg-white bg-opacity-80 h-full w-full p-4 gap-4 border-r">
            <div class="grid grid-cols-[40px,1fr,max-content] items-center gap-2 py-6">
              <img src="/assets/icon-color.svg"></img>
              <span class="text-2xl font-extrabold text-light-blue-700">Codeperate</span>
              <div class="w-9 h-9 rounded-lg bg-light-blue-600 text-white font-extrabold text-xl text-center p-1">UI</div>
            </div>
            <cdp-menu-list config={{
              menuItems: this.menuItem,
              anchorPropsFn: (href) => (_href(href, router))
            }}
              props={{ activePath }}
            ></cdp-menu-list>
            <div class="border-t p-2 grid-cols-[repeat(auto-fit,40px)]">
              <a href="https://github.com/codeperate/ui-library" class="p-2 hover:bg-gray-200 inline-block rounded-lg"><i class="fab fa-github fa-fw"></i></a>
            </div>
          </div>
        </cdp-menu>
      </Host>
    );
  }
}

