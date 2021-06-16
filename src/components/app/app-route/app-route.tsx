import { Component, h, Host, State } from '@stencil/core';
import { Route as StencilRoute } from 'stencil-router-v2';
import { router } from '../../../global/app';
@Component({
  tag: 'app-route'
})
export class AppRoute {
  @State() isLogin: boolean;
  componentWillLoad() { }
  render() {
    const Router = router;
    const Route = (props, child) => <StencilRoute {...props}>{child}</StencilRoute>;
    return (
      <Host class="grid grid-cols-1 max-w-screen-xl mx-auto p-4">
        <Router.Switch>
          <Route path={/^\/components\/cdp-modal/}>
            <page-modal></page-modal>
          </Route>
          <Route path={/^\/components\/cdp-accordion/}>
            <page-accordion></page-accordion>
          </Route>
          <Route path={/^\/change-log/}>
            <page-change-log></page-change-log>
          </Route>
          <Route path={/^\/components\/cdp-menu-list/}>
            <page-menu-list></page-menu-list>
          </Route>
          <Route path={/^\/components\/cdp-menu/}>
            <page-menu></page-menu>
          </Route>
          <Route path={/^\/components\/cdp-tooltip/}>
            <page-tooltip></page-tooltip>
          </Route>
          <Route path={/^\/components\/cdp-swiper/}>
            <page-swiper></page-swiper>
          </Route>
          <Route path={/^\//}>
            <page-home></page-home>
          </Route>
        </Router.Switch>
      </Host>
    );
  }
}
