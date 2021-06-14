import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-menu-list'
})
export class PageMenuList {

  render() {
    return <Host class="">
      <ui-doc url="/doc/cdpmenulist.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmenulistconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmenulistprops.md"></ui-doc>
    </Host>
  }
}
