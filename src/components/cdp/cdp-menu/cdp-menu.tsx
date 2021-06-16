import { Component, Element, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpMenuConfig, CdpMenuProps } from './cdp-menu.interface';

@Component({
  tag: 'cdp-menu',
})
export class CdpMenu {
  @Element() rootEl: HTMLCdpMenuElement;
  containerEl: HTMLDivElement;
  @Prop() config: CdpMenuConfig;
  @State() _config: CdpMenuConfig;
  defaultConfig: CdpMenuConfig = {
    sensitivity: 0.5,
    background: true,
    classList: {
      host: 'h-full block relative <md:w-0',
      container: '<md:transition-transform <md:translate-x-[-100%] transform sticky h-screen w-full top-0 overflow-y-auto',
      background: '<md:fixed md:hidden w-screen h-screen bg-black bg-opacity-50',
    },
  };
  @Prop({ mutable: true }) props: CdpMenuProps = {
    display: false,
  };
  _props: CdpMenuProps
  initXPos: number;
  finalXPos: number;
  offsetX: number;
  translateX: number = 0;

  @Listen('touchstart', { target: 'window', passive: false })
  touchDownHandler(e: TouchEvent) {
    if (this.containerEl.contains(e.target as HTMLElement)) return;
    this.initXPos = e.touches[0].clientX;
    addEventListener('touchmove', this.moveHandler, { passive: false });
  }
  @Listen('touchend', { target: 'window', passive: true })
  touchUpHandler() {
    removeEventListener('touchmove', this.moveHandler);
    if (this.translateX <= 50) {
      this.close();
    }
    if (this.translateX > 50) {
      this.open();
    }
  }
  @Watch('props')
  configChangeHandler(n: CdpMenuProps) {
    if (n.display) {
      this.translateX = 100;
      this.setTranslateX()
    }
    if (!n.display) this.removeTranslateX()
  }
  open() {
    this._props = { ...this._props, display: true };
  }
  close() {
    this._props = { ...this._props, display: false };
  }
  setTranslateX() {
    if (this.containerEl) this.containerEl.style.transform = `translateX(${this.translateX - 100}%)`;
  }
  removeTranslateX() {
    if (this.containerEl) this.containerEl.style.transform = null;
  }
  moveHandler = (e: TouchEvent) => {
    if (e instanceof TouchEvent) this.finalXPos = e.touches[0].clientX;
    this.offsetX = (this.finalXPos - this.initXPos) * this._config.sensitivity;
    if (this.offsetX <= 0) this.offsetX = 0;
    if (this.offsetX >= 100) this.offsetX = 100;
    this.translateX = this.offsetX;
    this.setTranslateX();
  };
  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
    this._props = new Proxy(this.props, this._config.proxyHandler ?? {})
  }

  render() {
    const { classList, width, background } = this._config;
    const { display } = this._props;
    return (
      <Host class={`${classList.host}`}>
        {display && background ? <div class={`${classList.background}`} onClick={() => this.close()}></div> : ""}
        <div ref={(el) => (this.containerEl = el)} class={`${classList.container}`} style={width ? { width: width } : {}}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
