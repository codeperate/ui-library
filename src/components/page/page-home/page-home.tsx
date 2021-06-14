import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-home'
})
export class PageHome {
  render() {
    return <Host>
      <ui-doc url="/typedoc/README.md"></ui-doc>
    </Host>
  }
}
