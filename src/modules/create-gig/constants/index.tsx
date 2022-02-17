// import { lazy } from "react";
import { Steps } from "../types";
import Description from "../components/Description";
import Gallery from "../components/Gallery";
import Overview from "../components/Overview";
import Requirements from "../components/Requirements";
import Scope from "../components/Scope";

// const Overview = lazy(() => import('../components/Overview'));
// const Scope = lazy(() => import('../components/Scope'));
// const Description = lazy(() => import('../components/Description'));
// const Requirements = lazy(() => import('../components/Requirements'));
// const Gallery = lazy(() => import('../components/Gallery'));

export const steps: Array<Steps> = [
    {
      label: 'Overview',
      component: <Overview />
    },
    {
      label: 'Scope & Pricing',
      component: <Scope />
    },
    {
      label: 'Description',
      component: <Description />
    },
    {
      label: 'Requirements',
      component: <Requirements />
    },
    {
      label: 'Gallery',
      component: <Gallery />
    },
];