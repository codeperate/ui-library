/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CdpAccordionConfig, CdpAccordionProps } from "./components/cdp/cdp-accordion/cdp-accordion.interface";
import { CdpMenuConfig, CdpMenuProps } from "./components/cdp/cdp-menu/cdp-menu.interface";
import { CdpMenuListConfig, CdpMenuListProps } from "./components/cdp/cdp-menu-list/cdp-menu-list.interface";
import { CdpModalConfig, CdpModalProps } from "./components/cdp/cdp-modal/cdp-modal.interface";
export namespace Components {
    interface AppMenu {
    }
    interface AppRoot {
    }
    interface AppRoute {
    }
    interface CdpAccordion {
        "config": CdpAccordionConfig;
        "props": CdpAccordionProps;
    }
    interface CdpMenu {
        "config": CdpMenuConfig;
        "props": CdpMenuProps;
    }
    interface CdpMenuList {
        "config": CdpMenuListConfig;
        "props": CdpMenuListProps;
    }
    interface CdpModal {
        "config": CdpModalConfig;
        "props": CdpModalProps;
    }
    interface PageHome {
    }
    interface PageMenu {
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
    interface HTMLAppRouteElement extends Components.AppRoute, HTMLStencilElement {
    }
    var HTMLAppRouteElement: {
        prototype: HTMLAppRouteElement;
        new (): HTMLAppRouteElement;
    };
    interface HTMLCdpAccordionElement extends Components.CdpAccordion, HTMLStencilElement {
    }
    var HTMLCdpAccordionElement: {
        prototype: HTMLCdpAccordionElement;
        new (): HTMLCdpAccordionElement;
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
    interface HTMLCdpModalElement extends Components.CdpModal, HTMLStencilElement {
    }
    var HTMLCdpModalElement: {
        prototype: HTMLCdpModalElement;
        new (): HTMLCdpModalElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageMenuElement extends Components.PageMenu, HTMLStencilElement {
    }
    var HTMLPageMenuElement: {
        prototype: HTMLPageMenuElement;
        new (): HTMLPageMenuElement;
    };
    interface HTMLElementTagNameMap {
        "app-menu": HTMLAppMenuElement;
        "app-root": HTMLAppRootElement;
        "app-route": HTMLAppRouteElement;
        "cdp-accordion": HTMLCdpAccordionElement;
        "cdp-menu": HTMLCdpMenuElement;
        "cdp-menu-list": HTMLCdpMenuListElement;
        "cdp-modal": HTMLCdpModalElement;
        "page-home": HTMLPageHomeElement;
        "page-menu": HTMLPageMenuElement;
    }
}
declare namespace LocalJSX {
    interface AppMenu {
    }
    interface AppRoot {
    }
    interface AppRoute {
    }
    interface CdpAccordion {
        "config"?: CdpAccordionConfig;
        "props"?: CdpAccordionProps;
    }
    interface CdpMenu {
        "config"?: CdpMenuConfig;
        "props"?: CdpMenuProps;
    }
    interface CdpMenuList {
        "config": CdpMenuListConfig;
        "props": CdpMenuListProps;
    }
    interface CdpModal {
        "config"?: CdpModalConfig;
        "onClosed"?: (event: CustomEvent<any>) => void;
        "onOpened"?: (event: CustomEvent<any>) => void;
        "props"?: CdpModalProps;
    }
    interface PageHome {
    }
    interface PageMenu {
    }
    interface IntrinsicElements {
        "app-menu": AppMenu;
        "app-root": AppRoot;
        "app-route": AppRoute;
        "cdp-accordion": CdpAccordion;
        "cdp-menu": CdpMenu;
        "cdp-menu-list": CdpMenuList;
        "cdp-modal": CdpModal;
        "page-home": PageHome;
        "page-menu": PageMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-menu": LocalJSX.AppMenu & JSXBase.HTMLAttributes<HTMLAppMenuElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-route": LocalJSX.AppRoute & JSXBase.HTMLAttributes<HTMLAppRouteElement>;
            "cdp-accordion": LocalJSX.CdpAccordion & JSXBase.HTMLAttributes<HTMLCdpAccordionElement>;
            "cdp-menu": LocalJSX.CdpMenu & JSXBase.HTMLAttributes<HTMLCdpMenuElement>;
            "cdp-menu-list": LocalJSX.CdpMenuList & JSXBase.HTMLAttributes<HTMLCdpMenuListElement>;
            "cdp-modal": LocalJSX.CdpModal & JSXBase.HTMLAttributes<HTMLCdpModalElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-menu": LocalJSX.PageMenu & JSXBase.HTMLAttributes<HTMLPageMenuElement>;
        }
    }
}
