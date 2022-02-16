import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Navs } from './modules/common/constants/navlist-routes';
// import ProtectedRoutes from './ProtectedRoutes';
import useAppSelector from './helpers/useAppSelector';

const Router = () => {
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));
    const Auth = lazy(() => import('./modules/auth'));
    const Home = lazy(() => import('./modules/home'));
    const Dashboard = lazy(() => import('./modules/dashboard'));
    const CreateAccount = lazy(() => import('./modules/auth/components/CreateAccount'));
    const UserType = lazy(() => import('./modules/profilesetup/components/UserType'));
    const ProfileSetup = lazy(() => import('./modules/profilesetup/components/ProfileSetup'));
    const ProfileCompleted = lazy(() => import('./modules/profilesetup/components/ProfileCompleted'));
    const isLogin: boolean = useAppSelector('common.isLogin');
    
    return (
        <>
            <Routes>
                <Route path="/" element={isLogin  ? <Dashboard /> : <Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/signup/verify" element={<CreateAccount />} />

                <Route path="/user-type" element={<UserType />} />
                {/* <Route path="/verification-link" element={<VerificationLink />} /> */}
                <Route path="/profile-setup" element={<ProfileSetup />} />
                <Route path="/profile-completed" element={<ProfileCompleted />} />
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