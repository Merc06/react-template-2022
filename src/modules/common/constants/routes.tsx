import { lazy } from "react";
import { RouteProps } from "../types";

const Categories = lazy(() => import('../../categories'));
const Resources = lazy(() => import('../../resources'));
const ProGigs = lazy(() => import('../../pro-gigs'));
const About = lazy(() => import('../../about'));

const CreateGig = lazy(() => import ('../../create-gig'));

export const Navs: Array<RouteProps> = [
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
]

export const DropdownList: Array<RouteProps> = [
    {
        key: 'create-gig',
        path: '/create-gig',
        label: 'Create A Gig to sell',
        component: <CreateGig />
    },
    {
        key: 'my-gigs',
        path: '/my-gigs',
        label: 'My Gigs',
        component: <CreateGig />
    },
    {
        key: 'my-orders',
        path: '/my-orders',
        label: 'My Orders',
        component: <CreateGig />
    },
    {
        key: 'my-profile',
        path: 'my-profile',
        label: 'My Profile',
        component: <CreateGig />
    },
    {
        key: 'my-account-settings',
        path: 'settings',
        label: 'My Account Settings',
        component: <CreateGig />
    }
]