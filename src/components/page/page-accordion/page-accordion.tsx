import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-accordion'
})
export class PageAccordion {

  render() {
    return <Host class="">
      <ui-doc url="/typedoc/interfaces/cdpaccordionconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpaccordionprops.md"></ui-doc>
    </Host>
  }
}
