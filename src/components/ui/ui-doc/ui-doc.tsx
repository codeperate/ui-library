import { Component, h, Host, Prop, State } from '@stencil/core';
import marked from 'marked';
@Component({
    tag: 'ui-doc'
})
export class UiDoc {
    @Prop() url!: string
    @State() innerHTML: string
    componentWillRender() {
        fetch(this.url).then((res) => res.text()).then((res) => this.innerHTML = marked(res))
    }
    render() {
        return <Host>
            <div innerHTML={this.innerHTML}></div>
        </Host>
    }
}
