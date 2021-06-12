/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CdpMenuConfig, CdpMenuProps } from "./components/cdp/cdp-menu/cdp-menu.interface";
import { CdpMenuListConfig } from "./components/cdp/cdp-menu-list/cdp-menu-list.interface";
export namespace Components {
    interface AppMenu {
    }
    interface AppRoot {
    }
    interface CdpMenu {
        "config": CdpMenuConfig;
        "props": CdpMenuProps;
    }
    interface CdpMenuList {
        "config": CdpMenuListConfig;
    }
}
declare global {
    interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {
    }
    var HTMLAppMenuElement: {
        prototype: HTMLAppMenuElement;
        new (): HTMLAppMenuElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCdpMenuElement extends Components.CdpMenu, HTMLStencilElement {
    }
    var HTMLCdpMenuElement: {
        prototype: HTMLCdpMenuElement;
        new (): HTMLCdpMenuElement;
    };
    interface HTMLCdpMenuListElement extends Components.CdpMenuList, HTMLStencilElement {
    }
    var HTMLCdpMenuListElement: {
        prototype: HTMLCdpMenuListElement;
        new (): HTMLCdpMenuListElement;
    };
    interface HTMLElementTagNameMap {
        "app-menu": HTMLAppMenuElement;
        "app-root": HTMLAppRootElement;
        "cdp-menu": HTMLCdpMenuElement;
        "cdp-menu-list": HTMLCdpMenuListElement;
    }
}
declare namespace LocalJSX {
    interface AppMenu {
    }
    interface AppRoot {
    }
    interface CdpMenu {
        "config"?: CdpMenuConfig;
        "props"?: CdpMenuProps;
    }
    interface CdpMenuList {
        "config": CdpMenuListConfig;
    }
    interface IntrinsicElements {
        "app-menu": AppMenu;
        "app-root": AppRoot;
        "cdp-menu": CdpMenu;
        "cdp-menu-list": CdpMenuList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-menu": LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "cdp-menu": LocalJSX.CdpMenu & JSXBase.HTMLAttributes<HTMLCdpMenuElement>;
            "cdp-menu-list": LocalJSX.CdpMenuList & JSXBase.HTMLAttributes<HTMLCdpMenuListElement>;
        }
    }
}
