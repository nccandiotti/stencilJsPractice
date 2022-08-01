/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ContentCard {
    }
    interface ContentComponent {
    }
    interface FooterComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface NavComponent {
        "links": string[];
    }
}
export interface NavComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLNavComponentElement;
}
declare global {
    interface HTMLContentCardElement extends Components.ContentCard, HTMLStencilElement {
    }
    var HTMLContentCardElement: {
        prototype: HTMLContentCardElement;
        new (): HTMLContentCardElement;
    };
    interface HTMLContentComponentElement extends Components.ContentComponent, HTMLStencilElement {
    }
    var HTMLContentComponentElement: {
        prototype: HTMLContentComponentElement;
        new (): HTMLContentComponentElement;
    };
    interface HTMLFooterComponentElement extends Components.FooterComponent, HTMLStencilElement {
    }
    var HTMLFooterComponentElement: {
        prototype: HTMLFooterComponentElement;
        new (): HTMLFooterComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLNavComponentElement extends Components.NavComponent, HTMLStencilElement {
    }
    var HTMLNavComponentElement: {
        prototype: HTMLNavComponentElement;
        new (): HTMLNavComponentElement;
    };
    interface HTMLElementTagNameMap {
        "content-card": HTMLContentCardElement;
        "content-component": HTMLContentComponentElement;
        "footer-component": HTMLFooterComponentElement;
        "my-component": HTMLMyComponentElement;
        "nav-component": HTMLNavComponentElement;
    }
}
declare namespace LocalJSX {
    interface ContentCard {
    }
    interface ContentComponent {
    }
    interface FooterComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface NavComponent {
        "links"?: string[];
        "onHandleDisplayCard"?: (event: NavComponentCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "content-card": ContentCard;
        "content-component": ContentComponent;
        "footer-component": FooterComponent;
        "my-component": MyComponent;
        "nav-component": NavComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "content-card": LocalJSX.ContentCard & JSXBase.HTMLAttributes<HTMLContentCardElement>;
            "content-component": LocalJSX.ContentComponent & JSXBase.HTMLAttributes<HTMLContentComponentElement>;
            "footer-component": LocalJSX.FooterComponent & JSXBase.HTMLAttributes<HTMLFooterComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "nav-component": LocalJSX.NavComponent & JSXBase.HTMLAttributes<HTMLNavComponentElement>;
        }
    }
}