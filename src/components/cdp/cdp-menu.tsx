import { Component, Element, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { deepMerge } from '../../utils/deepmerge';
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
    width: "auto",
    initialDisplay: false,
    collapsible: true,
    collapse: false,
    sensitivity: 0.5,
    classList: {
      host: 'h-full block relative',
      container: '<md:transition-transform <md:translate-x-[-100%] transform sticky h-screen w-full grid top-0 overflow-y-auto p-2',
      background: '<md:fixed hidden w-screen h-screen bg-black bg-opacity-50',
    },
  };
  @Prop({ mutable: true }) props: CdpMenuProps = {
    display: false,
  };
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
    if (n.display) this.translateX = 100;
    if (!n.display) this.translateX = 0;
    this.setTranslateX();
  }
  open() {
    this.props = { ...this.props, display: true };
  }
  close() {
    this.props = { ...this.props, display: false };
  }
  setTranslateX() {
    if (this.containerEl) this.containerEl.style.transform = `translateX(${this.translateX - 100}%)`;
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
    this._config = deepMerge(this.config, this.defaultConfig);
  }

  render() {
    const { classList, width } = this._config;
    return (
      <Host class={`${classList.host}`}>
        <div
          class={`${classList.background}`}
          onClick={() => this.close()}
        ></div>
        <div ref={(el) => (this.containerEl = el)} class={`${classList.container}`} style={{ width: width }}>
          <slot></slot>
        </div>
      </Host >
    );
  }
}
