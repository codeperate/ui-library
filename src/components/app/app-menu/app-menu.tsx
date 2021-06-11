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
        <cdp-menu config={{ width: "260px" }}>
          Testing123
        </cdp-menu>
      </Host>
    );
  }
}
