import { Component, h, Host } from '@stencil/core';
@Component({
  tag: 'page-accordion'
})
export class PageAccordion {

  render() {
    return <Host class="">
      <h1>Preview</h1>
      <cdp-accordion class="place-self-start">
        <div slot="accordion" class="bg-light-blue-600 p-2 rounded-lg text-white cursor-pointer">Click to expand
          <i class="fas fa-chevron-right expanded:transform expanded:rotate-90 transition-all ml-4"></i>
        </div>
        <div>Content</div>
      </cdp-accordion>
      <ui-doc url="/doc/cdpaccordion.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpaccordionconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpaccordionprops.md"></ui-doc>
    </Host>
  }
}
