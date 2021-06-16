import { Component, h, Host, State } from '@stencil/core';
import { CdpModalProps } from '../../cdp/cdp-modal/cdp-modal.interface';
@Component({
  tag: 'page-swiper'
})
export class PageSwiper {
  @State() props: CdpModalProps;
  render() {
    return <Host class="">
      <h1>Preview</h1>
      <cdp-swiper config={{ option: { slidesPerView: 1, observeParents: true } }} class="w-full">
        <div class="swiper-wrapper">
          <div class="swiper-slide w-full bg-blue-600 text-white">Slide 1</div>
          <div class="swiper-slide w-full bg-green-600 text-white">Slide 2</div>
          <div class="swiper-slide w-full bg-red-600 text-white">Slide 3</div>
        </div>
      </cdp-swiper>
      <ui-doc url="/doc/cdpswiper.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpswiperconfig.md"></ui-doc>
      <ui-doc url="/typedoc/interfaces/cdpswiperprops.md"></ui-doc>
    </Host>
  }
}
