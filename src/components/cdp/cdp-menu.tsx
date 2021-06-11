
import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { deepMerge } from '../../utils/deepmerge';
import { CdpMenuConfig } from './cdp-menu.interface';


@Component({
  tag: 'cdp-menu'
})
export class CdpMenu {
  @Element() rootEl: HTMLCdpMenuElement;
  @Prop() config: CdpMenuConfig;
  @State() _config: CdpMenuConfig
  defaultConfig: CdpMenuConfig = {
    menuWidth: "auto",
    initialDisplay: false,
    collapsible: true,
    collapse: false,
    sensitivity: 0.5,
    classList: {
      host: "h-full block relative",
      container: "sticky h-screen grid top-0 flex-col overflow-y-auto p-2 transition-transform",
      background: "fixed w-screen h-screen bg-black bg-opacity-50"
    },
  }
  translateX: number
  componentWillLoad() {
    this._config = deepMerge(this.config, this.defaultConfig);
  }

  render() {
    const { classList } = this._config
    return (
      <Host class={`${classList.host}`}>
        <div class={`${classList.background}`} onClick={() => { }}></div>
        <div class={`${classList.container}`} style={{ transform: `translateX(${(this.translateX - 100)}%)` }}>
          <slot></slot>
        </div>
      </Host>
    )
  }

}
