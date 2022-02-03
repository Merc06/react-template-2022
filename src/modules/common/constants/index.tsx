import { lazy } from "react";
import { RouteProps } from "../types";

const Home = lazy(() => import('../../home'));
const About = lazy(() => import('../../about'));

export const Navs: Array<RouteProps> = [
    {
        key: 'home',
        path: '/',
        label: 'Home',
        component: <Home />
    },
    {
        key: 'about',
        path: 'about',
        label: 'About',
        component: <About />
    }
]