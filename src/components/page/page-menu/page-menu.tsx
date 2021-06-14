import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-menu'
})
export class PageMenu {

  render() {
    return <Host class="">
      <ui-doc url="/doc/cdpmenu.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmenuconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmenuprops.md"></ui-doc>
    </Host>
  }
}
