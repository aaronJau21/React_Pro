import { lazy } from "react";
import { Route } from "../../router/routes";

const lazy1 = lazy(() => import('../pages/LazyPage1'))
const lazy2 = lazy(() => import('../pages/LazyPage2'))
const lazy3 = lazy(() => import('../pages/LazyPage3'))

export const routesLazyLoads: Route[] = [
    {
        to:"lazy1",
        path: "/lazy1",
        Component: lazy1,
        name: "Lazy 1"
    },
    {
        to:"lazy2",
        path: "/lazy2",
        Component: lazy2,
        name: "Lazy 2"
    },
    {
        to:"lazy3",
        path: "/lazy3",
        Component: lazy3,
        name: "Lazy 3"
    }
]