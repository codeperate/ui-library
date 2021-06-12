import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core';
import { CdpAccordionConfig, CdpAccordionProps } from './cdp-accordion.interface';


@Component({
    tag: 'cdp-accordion'
})
export class CdpAccordion {
    @Element() rootEl: HTMLCdpAccordionElement;
    @Prop({ mutable: true }) props: CdpAccordionProps = { display: false };
    @Prop() config: CdpAccordionConfig
    @State() contentHeight: string = "0"
    contentEl: HTMLDivElement;
    @Method() async open() {
        if (this.contentEl) {
            let height = 0;
            for (let i = 0; i < this.contentEl.children.length; i++) {
                const el = this.contentEl.children[i] as HTMLElement
                const style = getComputedStyle(el)
                height += (parseFloat(style.marginTop) || 0)
                height += el.offsetHeight;
                height += (parseFloat(style.marginBottom) || 0)
            }
            this.contentHeight = height + "px";
            this.props = { ...this.props, display: true };
        }
    }
    close() {
        this.contentHeight = "0";
        this.props = { ...this.props, display: false };
    }
    componentWillLoad() {
        if (this.props.display)
            this.contentHeight = "auto"
    }
    render() {
        //const { display } = this.props
        return <Host class="">
            <div>
                <slot name="accordion"></slot>
            </div>
            <div>
                <slot></slot>
            </div>
        </Host>
    }
}