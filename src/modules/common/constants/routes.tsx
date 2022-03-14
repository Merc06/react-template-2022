import { lazy } from "react";

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import PersonIcon from '@mui/icons-material/Person';

import { RouteProps } from "../types";

const Categories = lazy(() => import('../../categories'));
const Resources = lazy(() => import('../../resources'));
const ProGigs = lazy(() => import('../../pro-gigs'));
const About = lazy(() => import('../../about'));

const Dashboard = lazy(() => import('../../dashboard'));
const CreateGig = lazy(() => import ('../../create-gig'));

const MyGigs = lazy(() => import ('../../my-gigs'));
const MyOrders = lazy(() => import ('../../my-orders'));
const MyProfile = lazy(() => import ('../../my-profile'));
const AccountSettings = lazy(() => import ('../../account-settings'));


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

export const Menubar: Array<RouteProps> = [
    {
        key: 'dashboard',
        path: '/',
        label: 'Dashboard',
        component: <Dashboard />,
        icon: <HomeIcon fontSize="large" />
    },
    {
        key: 'create-gig',
        path: '/create-gig',
        label: 'Create A Gig to sell',
        component: <CreateGig />,
        icon: <AddIcon fontSize="large" />
    },
    {
        key: 'search-gigs',
        path: '/search-gigs',
        label: 'Search Gigs',
        component: <CreateGig />,
        icon: <SearchIcon fontSize="large" />
    },
    {
        key: 'notifications',
        path: '/notifications',
        label: 'Notifications',
        component: <CreateGig />,
        icon: <NotificationsIcon fontSize="large" />
    },
    // {
    //     key: 'my-profile',
    //     path: 'my-profile',
    //     label: 'My Profile',
    //     component: <CreateGig />,
    //     icon: <PersonIcon fontSize="large" />
    // }
]

export const ProfileMenuList: Array<RouteProps> = [
    {
        key: 'mygigs',
        path: '/my-gigs',
        label: 'My Gigs',
        component: <MyGigs />
    },
    {
        key: 'my-orders',
        path: '/my-orders',
        label: 'My Orders',
        component: <MyOrders />,
    },
    {
        key: 'my-profile',
        path: '/my-profile',
        label: 'My Profile',
        component: <MyProfile />,
    },
    {
        key: 'account-settings',
        path: '/account-settings',
        label: 'Account Settings',
        component: <AccountSettings />,
    },
]