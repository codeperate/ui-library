import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import Swiper from 'swiper';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpSwiperConfig, CdpSwiperProps } from './cdp-swiper.interface';
@Component({
    tag: 'cdp-swiper'
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
    componentDidLoad() {
        this._config = deepAssign(this.config, this.defaultConfig);
        this.swiper = new Swiper(this.rootEl, this._config.option);
    }
    @Watch('props')
    propsHandler(n: CdpSwiperProps) {
        if (n.slideTo) this.swiper.slideTo(n.slideTo)
    }
    render() {
        const { classList } = this._config
        return <Host class={classList.host}>
            <slot></slot>
        </Host>
    }
}
