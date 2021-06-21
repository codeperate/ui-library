import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State, Watch } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpModalConfig, CdpModalProps } from './cdp-modal.interface';

@Component({
  tag: 'cdp-modal',
})
export class CdpModal {
  @Element() rootEl: HTMLCdpModalElement;
  @Prop() config: CdpModalConfig;
  @Prop({ mutable: true }) props: CdpModalProps = {};
  @State() _config: CdpModalConfig;
  defaultConfig: CdpModalConfig = {
    classList: {
      host: 'absolute h-full w-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-80 backdrop-filter',
    },
    animation: {
      open: 'animated animate-zoom-in',
      close: 'animated animate-zoom-out',
    },
    bgClose: true
  };
  @State() public animeClass: string;
  @State() public computedDisplay: boolean;
  @Event() opened: EventEmitter;
  @Event() closed: EventEmitter;
  @Listen('animationend')
  animationendHandler() {
    const { display } = this.props;
    if (!display) this.closedFn();
    else this.openedFn();
  }
  openedFn() {
    this.opened.emit();
    this.animeClass = '';
  }
  closedFn() {
    this.computedDisplay = false;
    this.closed.emit();
    this.animeClass = '';
  }
  open() {
    const { open } = this._config.animation;
    this.computedDisplay = true;
    if (open) this.animeClass = open;
    else this.openedFn();
  }
  close() {
    const { close } = this._config.animation;
    if (close) this.animeClass = close;
    else this.closedFn();
  }
  @Watch('props')
  propsHandler(n: CdpModalProps) {
    if (n.display) this.open();
    if (!n.display) this.close();
  }
  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
    this.computedDisplay = this.props.display;
    if (this.props.display) this.open();
  }
  componentDidRender() {
    const { open, close } = this._config.animation
    if (this.rootEl) {
      if (open) open.split(" ").forEach((val) => this.rootEl.children[0].classList.remove(val))
      if (close) close.split(" ").forEach((val) => this.rootEl.children[0].classList.remove(val))
      if (this.animeClass) this.animeClass.split(" ").forEach((val) => this.rootEl.children[0].classList.add(val))
    }
  }
  render() {
    const { classList, bgClose } = this._config;
    const hostClass = classList.host + (this.computedDisplay ? '' : ' !hidden');
    return (
      <Host class={hostClass} onClick={() => { if (bgClose) this.props = { ...this.props, display: false } }}>
        <slot></slot>
      </Host>
    );
  }
}
