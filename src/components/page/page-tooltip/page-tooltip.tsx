import { Component, h, Host, State } from '@stencil/core';
import { CdpModalProps } from '../../cdp/cdp-modal/cdp-modal.interface';
@Component({
  tag: 'page-tooltip',
})
export class PageTooltip {
  @State() props: CdpModalProps;
  render() {
    return (
      <Host class="">
        <h1>Preview</h1>
        <cdp-tooltip class="place-self-start" config={{ arrow: true }} props={{ display: true }}>
          <button>Hover me</button>
          <div slot="tooltip">Hi!</div>
        </cdp-tooltip>
        <ui-doc url="/doc/cdptooltip.md"></ui-doc>
        <ui-doc url="/typedoc/interfaces/cdptooltipconfig.md"></ui-doc>
        <ui-doc url="/typedoc/interfaces/cdptooltipprops.md"></ui-doc>
      </Host>
    );
  }
}
