import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Navs } from './modules/common/constants/navlist-routes';
import VerificationLink from './modules/emailrequest/VerificationLink';
import ProtectedRoutes from './ProtectedRoutes';

const Router = () => {
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));
    const Auth = lazy(() => import('./modules/auth'));
    const CreateAccount = lazy(() => import('./modules/auth/components/CreateAccount'));
    const UserType = lazy(() => import('./modules/profilesetup/components/UserType'));
    const ProfileSetup = lazy(() => import('./modules/profilesetup/components/ProfileSetup'));
    const ProfileCompleted = lazy(() => import('./modules/profilesetup/components/ProfileCompleted'));

    return (
        <>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/signup/verify" element={<CreateAccount />} />

                <Route element={<ProtectedRoutes />}>
                    <Route path="/user-type" element={<UserType />} />
                    <Route path="/verification-link" element={<VerificationLink />} />
                    <Route path="/profile-setup" element={<ProfileSetup />} />
                    <Route path="/profile-completed" element={<ProfileCompleted />} />
                    {
                        Navs.map(({ path, key, component }) => (
                            <Route path={path} key={key} element={component} />
                        ))
                    }
                </Route>
                
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;