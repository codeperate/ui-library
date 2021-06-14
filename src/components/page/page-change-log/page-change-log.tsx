import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-change-log'
})
export class PageChangeLog {
  render() {
    return <Host>
      <ui-doc url="./CHANGELOG.md"></ui-doc>
    </Host>
  }
}
