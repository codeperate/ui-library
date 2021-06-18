import { Component, h, Host, State } from '@stencil/core';
import { CdpModalProps } from '../../cdp/cdp-modal/cdp-modal.interface';
@Component({
  tag: 'page-modal'
})
export class PageModal {
  @State() props: CdpModalProps;
  render() {
    return <Host class="">
      <h1>Preview</h1>
      <button onClick={() => this.props = { ...this.props, display: true }} class="place-self-start">Show Modal</button>
      <cdp-modal props={this.props}>
        <div class="bg-white p-4 rounded-lg">This is a modal!</div>
      </cdp-modal>
      <ui-doc url="/doc/cdpmodal.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmodalconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpmodalprops.md"></ui-doc>
    </Host>
  }
}
