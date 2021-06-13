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
			<Host class="grid grid-cols-1 max-w-screen-xl mx-auto">
				<Router.Switch>
					<Route path={/^\/components\/cdp-menu/}>
						<page-menu></page-menu>
					</Route>
					<Route path={/^\//}>
						<page-home></page-home>
					</Route>
				</Router.Switch>
			</Host>
		);
	}
}
