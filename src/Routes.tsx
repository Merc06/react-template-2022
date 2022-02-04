import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Navs } from './modules/common/constants/navlist-routes';

const Router = () => {
    const Home = lazy(() => import('./modules/home'));
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    Navs.map(({ path, key, component }) => (
                    <Route path={path} key={key} element={component} />
                    ))
                }
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;