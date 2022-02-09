import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Navs } from './modules/common/constants/navlist-routes';
import EmailRequest from './modules/emailrequest';
import VerificationStatus from './modules/emailrequest/VerificationStatus';
import VerificationLink from './modules/emailrequest/VerificationLink';
import UserType from './modules/auth/components/UserType';
import getToken from './helpers/getToken';

const Router = () => {
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));
    const Home = lazy(() => import('./modules/home'));
    const Auth = lazy(() => import('./modules/auth'));
    const CreateAccount = lazy(() => import('./modules/auth/components/CreateAccount'));

    return (
        <>
            <Routes>
                <Route path="/" element={getToken() ? <Home /> : <Auth />} />
                <Route path="/signup/verify" element={<CreateAccount />} />
                <Route path="/user-type" element={<UserType />} />

                <Route path="/email-request" element={<EmailRequest />} />
                <Route path="/verification-status" element={<VerificationStatus />} />
                <Route path="/verification-link" element={<VerificationLink />} />
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