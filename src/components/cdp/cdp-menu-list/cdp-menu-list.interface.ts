import { JSXBase } from '@stencil/core/internal';

export interface CdpMenuItem {
	href: string;
	isActive?: (path: string) => boolean;
	nested?: Omit<CdpMenuItem, 'nested'>[];
	name: string;
	icon?: (active: boolean) => HTMLElement;
	indicator?: (active: boolean) => HTMLElement;
}
export interface CdpMenuListConfig {
	menuItems: CdpMenuItem[];
	anchorPropsFn: (href: string) => JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>;
	classList?: {
		/** @default  "w-full flex p-2 hover:bg-blue-500 hover:text-white items-center rounded-md" */
		menuItem?: string;
		/** @default  "w-8" */
		menuItemIcon?: string;
		/** @default  "bg-blue-500 text-white active" */
		menuItemActive?: string;
		/** @default "w-full flex p-1 hover:bg-blue-500 hover:text-white items-center justify-start rounded-md" */
		subMenuItem?: string;
		/** @default "bg-blue-500 text-white active" */
		subMenuItemActive?: string;
		/** @default "" */
		host?: string;
	};
}
