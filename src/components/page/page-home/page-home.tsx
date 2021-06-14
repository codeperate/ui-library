import { Component, h, Host } from '@stencil/core';
import { marked } from 'marked';
@Component({
    tag: 'page-home'
})
export class PageHome {

    render() {
        return <Host>
            <div innerHTML={marked("")}></div>
        </Host>
    }
}
