import { lazy } from "react";
import { RouteProps } from "../types";

const Home = lazy(() => import('../../home'));
const Categories = lazy(() => import('../../categories'));
const Resources = lazy(() => import('../../resources'));
const ProGigs = lazy(() => import('../../pro-gigs'));
const About = lazy(() => import('../../about'));
// const EmailRequest = lazy(() => import('../../emailrequest'));

export const Navs: Array<RouteProps> = [
    {
        key: 'home',
        path: '/',
        label: 'Home',
        component: <Home />
    },
    {
        key: 'categories',
        path: '/categories',
        label: 'Categories',
        component: <Categories />
    },
    {
        key: 'resources',
        path: '/resources',
        label: 'Resources',
        component: <Resources />
    },
    {
        key: 'pro-gigs',
        path: '/pro-gigs',
        label: 'Pro Gigs',
        component: <ProGigs />
    },
    {
        key: 'about',
        path: 'about',
        label: 'About',
        component: <About />
    },
    // {
    //     key: 'emailrequest',
    //     path: 'email-request',
    //     label: 'EmailRequest',
    //     component: <EmailRequest />
    // }
]