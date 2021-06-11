import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'app-menu',
})
export class AppMenu {
  @Element() rootEl: HTMLAppRootElement;
  componentWillLoad() { }
  render() {
    return (
      <Host>
        <a></a>
      </Host>
    );
  }
}
