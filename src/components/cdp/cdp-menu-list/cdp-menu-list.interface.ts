import { JSXBase } from '@stencil/core/internal';

export type CdpMenuItem = MenuItem | NestedMenuItem;
type NestedMenuItem = {
	isActive: (path: string) => boolean;
	name: string;
	icon?: (active: boolean) => HTMLElement;
	indicator?: (active: boolean) => HTMLElement;
	nested: MenuItem[];
	expand?: boolean;
};
type MenuItem = {
	href: string;
	isActive?: (path: string) => boolean;
	name: string;
	icon?: (active: boolean) => HTMLElement;
	indicator?: (active: boolean) => HTMLElement;
};
export interface CdpMenuListProps {
	activePath: string;
}
export interface CdpMenuListConfig {
	menuItems: CdpMenuItem[];
	/**
	 * @description Overwrite the href property of anchor element to fit your application router
	 * @description Overwrite the onclick event of anchor element to fit your application router
	 */
	anchorPropsFn: (href: string) => { href: string; onClick: (ev: MouseEvent) => void } & JSXBase.AnchorHTMLAttributes<HTMLAnchorElement>;
	classList?: {
		/** @default "grid grid-cols-1 gap-y-2 auto-rows-min" */
		host?: string;
		/** @default  "py-2 px-4 hover:bg-light-blue-600 hover:text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4 cursor-pointer" */
		menuItem?: string;
		/** @default  "py-2 px-4 bg-light-blue-600 text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4 cursor-pointer" */
		menuItemActive?: string;
		/** @default "py-1 px-4 hover:bg-light-blue-600 hover:text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4" */
		subMenuItem?: string;
		/** @default "py-1 px-4 bg-light-blue-600 text-white rounded-md grid grid-cols-[max-content,1fr,max-content] items-center gap-4" */
		subMenuItemActive?: string;
		/** @default "grid grid-cols-1 gap-y-1 mt-2 pl-4" */
		subMenuWrapper?: string;
	};
}
