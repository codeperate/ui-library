import { createPopper } from '@popperjs/core';
import { Instance } from '@popperjs/core/lib/types';
import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { deepAssign } from '../../../utils/deep-assign';
import { CdpTooltipConfig } from './cdp-tooltip.interface';


@Component({
    tag: 'cdp-tooltip',
    styleUrl: 'cdp-tooltip.css'
})
export class CdpTooltip {
    @Element() rootEl: HTMLCdpTooltipElement;
    @Prop() config: CdpTooltipConfig;
    defaultConfig: CdpTooltipConfig = {
        showEvents: ['mouseenter', 'focus'],
        hideEvents: ['mouseleave', 'blur'],
        classList: {
            tooltip: `bg-gray-600 text-white rounded w-max px-2 py-1 z-10`,
            arrow: `bg-gray-600 transform-gpu rotate-45 w-2 h-2`
        }
    };
    @State() _config: CdpTooltipConfig;
    @State() display: boolean = false;
    tooltipEl: HTMLElement
    popperInstance: Instance;
    componentWillLoad() {
        this._config = deepAssign(this.config, this.defaultConfig);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    componentDidLoad() {
        const { showEvents, hideEvents } = this._config;
        showEvents.forEach(event => { this.rootEl.addEventListener(event, this.show) })
        hideEvents.forEach(event => { this.rootEl.addEventListener(event, this.hide) })
    }
    componentDidUpdate() {
        if (this.popperInstance)
            this.popperInstance.update()
    }
    async show() {
        this.display = true;
        this.popperInstance = createPopper(this.rootEl, this.tooltipEl, this._config.option)
    }
    async hide() {
        this.display = false;
        this.popperInstance ? this.popperInstance.destroy() : this.popperInstance = null;
    }
    disconnectedCallback() {
        const { showEvents, hideEvents } = this._config;
        showEvents.forEach(event => { this.rootEl.removeEventListener(event, this.show) })
        hideEvents.forEach(event => { this.rootEl.removeEventListener(event, this.hide) })
    }
    render() {
        const { classList, arrow } = this._config;
        return (
            <Host class="relative inline-block">
                <slot></slot>
                <div ref={(el) => this.tooltipEl = el} class={`${classList.tooltip} ${this.display ? "block" : "hidden"}`}>
                    <slot name="tooltip"></slot>
                    {arrow ? <div id="arrow" data-popper-arrow>
                        <div class={classList.arrow}></div>
                    </div> : ""}
                </div>
            </Host >
        )
    }
}
