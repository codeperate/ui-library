import { Component, h, Host } from '@stencil/core';
@Component({
    tag: 'page-home'
})
export class PageHome {

    render() {
        return <Host class="">
            HOME
            HOME
            <cdp-modal props={{ display: true }}>
                <div class="bg-white p-4 shadow">Testing</div>
            </cdp-modal>
        </Host>
    }
}
