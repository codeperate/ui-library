import { Component, Element, h, Host, Method, Prop, Watch,Listen } from '@stencil/core';
import SwiperClass from 'swiper/bundle';
import { Swiper} from 'swiper';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpSwiperConfig, CdpSwiperProps } from './cdp-swiper.interface';
@Component({
  tag: 'cdp-swiper',
  styleUrl: 'cdp-swiper.css',
})
export class CdpSwiper {
  @Element() rootEl: HTMLCdpSwiperElement;
  @Prop() config: CdpSwiperConfig;
  @Prop() props: CdpSwiperProps;
  _config: CdpSwiperConfig;
  defaultConfig: CdpSwiperConfig = {
    classList: {
      host: 'swiper-container block',
    },
    stopPropagation:true
  };
  swiper: Swiper;

  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
  }
  componentDidLoad() {
    this.swiper = new SwiperClass(this.rootEl, this._config.option);
  }
  @Method()
  async getSwiper():Promise<Swiper> {
    return this.swiper;
  }
  @Watch('props')
  propsHandler(n: CdpSwiperProps, o: CdpSwiperProps) {
    if (n.slideTo != o.slideTo) this.swiper.slideTo(n.slideTo);
  }
  @Listen('touchstart',{passive:false})
  touchStartHandler(e:TouchEvent){
    if(this._config.stopPropagation){
      e.preventDefault()
      e.stopPropagation();
    }
  }

  render() {
    const { classList } = this._config;
    return (
      <Host class={classList.host}>
        <slot></slot>
      </Host>
    );
  }
}
