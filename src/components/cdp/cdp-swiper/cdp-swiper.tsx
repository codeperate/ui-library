import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import Swiper from 'swiper/bundle';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpSwiperConfig, CdpSwiperProps } from './cdp-swiper.interface';
@Component({
  tag: 'cdp-swiper',
  styleUrl: 'cdp-swiper.css'
})
export class CdpSwiper {
  @Element() rootEl: HTMLCdpSwiperElement;
  @Prop() config: CdpSwiperConfig;
  @Prop() props: CdpSwiperProps;
  _config: CdpSwiperConfig
  defaultConfig: CdpSwiperConfig = {
    classList: {
      host: "swiper-container block"
    }
  }
  swiper: Swiper;

  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
  }
  componentDidLoad() {
    this.swiper = new Swiper(this.rootEl, this._config.option);
  }
  @Watch('props')
  propsHandler(n: CdpSwiperProps, o: CdpSwiperProps) {
    if (n.slideTo != o.slideTo) this.swiper.slideTo(n.slideTo)
  }
  render() {
    const { classList } = this._config
    return <Host class={classList.host}>
      <slot></slot>
    </Host>
  }
}
