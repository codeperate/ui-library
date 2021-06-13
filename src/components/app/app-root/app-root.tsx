import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  /*componentDidLoad() {
    modal.cart();
  }*/
  render() {
    return (
      <Host class="min-h-screen h-full grid grid-cols-[min-content,1fr] grid-rows-1">
        <app-menu class="z-20"></app-menu>
        <main class="relative z-10">
          <app-route></app-route>
          <app-modal></app-modal>
        </main>
      </Host>
    );
  }
}
