import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpAccordionConfig, CdpAccordionProps } from './cdp-accordion.interface';

@Component({
  tag: 'cdp-accordion',
})
export class CdpAccordion {
  @Element() rootEl: HTMLCdpAccordionElement;
  @Prop({ mutable: true }) props: CdpAccordionProps = { display: false };
  @Prop() config: CdpAccordionConfig;
  @State() _config: CdpAccordionConfig;
  defaultConfig: CdpAccordionConfig = {
    classList: {
      content: 'transition-all duration-500 overflow-hidden',
      expanded: 'expanded',
    },
    maxHeight: '100vh',
    toggle: true,
  };
  contentEl: HTMLDivElement;
  toggle() {
    this.props = { ...this.props, display: !this.props.display };
  }
  componentWillLoad() {
    this._config = deepAssign(this.config, this.defaultConfig);
  }
  render() {
    const { classList, maxHeight, toggle } = this._config;
    const { display } = this.props;
    const hostClass = display ? classList.expanded : '';
    return (
      <Host class={hostClass}>
        <div onClick={() => (toggle ? this.toggle() : null)}>
          <slot name="accordion"></slot>
        </div>
        <div ref={el => (this.contentEl = el)} class={classList.content} style={{ maxHeight: display ? maxHeight : '0' }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
