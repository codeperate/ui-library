import { createPopper } from '@popperjs/core';
import { Instance } from '@popperjs/core/lib/types';
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpTooltipConfig, CdpTooltipProps } from './cdp-tooltip.interface';

@Component({
  tag: 'cdp-tooltip',
  styleUrl: 'cdp-tooltip.css',
})
export class CdpTooltip {
  @Element() rootEl: HTMLCdpTooltipElement;
  @Prop() config: CdpTooltipConfig;
  defaultConfig: CdpTooltipConfig = {
    showEvents: ['mouseenter', 'focus'],
    hideEvents: ['mouseleave', 'blur'],
    classList: {
      tooltip: 'bg-gray-600 text-white rounded w-max px-2 py-1 z-10 block',
      arrow: 'bg-gray-600 transform-gpu rotate-45 w-2 h-2',
    },
    option: {
      strategy: 'fixed',
      placement: 'bottom',
    },
  };
  @State() _config: CdpTooltipConfig;
  @Prop({ mutable: true }) props: CdpTooltipProps = { display: false };
  _props: CdpTooltipProps;
  tooltipEl: HTMLElement;
  popperInstance: Instance;
  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.createProxy();
  }
  componentDidLoad() {
    const { showEvents, hideEvents } = this._config;
    showEvents.forEach(event => {
      this.rootEl.addEventListener(event, this.show);
    });
    hideEvents.forEach(event => {
      this.rootEl.addEventListener(event, this.hide);
    });
    if (this.props.display) {
      this.show();
    }
  }
  componentDidRender() {
    if (this.popperInstance) this.popperInstance.update();
  }
  async show() {
    this._props.display = true;
    this.popperInstance = createPopper(this.rootEl, this.tooltipEl, this._config.option);
  }
  async hide() {
    this._props.display = false;
    this.popperInstance ? this.popperInstance.destroy() : (this.popperInstance = null);
  }
  disconnectedCallback() {
    const { showEvents, hideEvents } = this._config;
    showEvents.forEach(event => {
      this.rootEl.removeEventListener(event, this.show);
    });
    hideEvents.forEach(event => {
      this.rootEl.removeEventListener(event, this.hide);
    });
  }
  @Watch('props')
  configChangeHandler() {
    this.createProxy();
  }
  createProxy() {
    const set = (target, prop, value, receiver) => {
      this.props = { ...target, [prop]: value };
      return Reflect.set(target, prop, value, receiver);
    };
    this._props = new Proxy(this.props, this._config.proxyHandler ?? { set });
  }
  render() {
    const { classList, arrow } = this._config;
    const tooltipClass = classList.tooltip + (this.props.display ? '' : ' !hidden');
    return (
      <Host class="relative">
        <slot></slot>
        <div ref={el => (this.tooltipEl = el)} class={tooltipClass}>
          <slot name="tooltip"></slot>
          {arrow ? (
            <div id="arrow" data-popper-arrow>
              <div class={classList.arrow}></div>
            </div>
          ) : null}
        </div>
      </Host>
    );
  }
}
