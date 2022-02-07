import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Navs } from './modules/common/constants/navlist-routes';
import EmailRequest from './modules/emailrequest';
import VerificationStatus from './modules/emailrequest/VerificationStatus';
import VerificationLink from './modules/emailrequest/VerificationLink';

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
                <Route path="/email-request" element={<EmailRequest />} />
                <Route path="/verification-status" element={<VerificationStatus />} />
                <Route path="/verification-link" element={<VerificationLink />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;