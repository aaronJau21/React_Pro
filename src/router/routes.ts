import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "lazyLazyout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
