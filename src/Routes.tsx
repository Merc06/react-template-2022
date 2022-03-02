import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { MenuList, Navs } from './modules/common/constants/routes';
// import ProtectedRoutes from './ProtectedRoutes';
import useAppSelector from './helpers/useAppSelector';

const Router = () => {
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));

    // MAIN ROUTES
    const Auth = lazy(() => import('./modules/auth'));
    const Home = lazy(() => import('./modules/home'));
    const Dashboard = lazy(() => import('./modules/dashboard'));

    // PROFILE SETUP ROUTES
    const CreateAccount = lazy(() => import('./modules/auth/components/CreateAccount'));
    const UserType = lazy(() => import('./modules/profilesetup/components/UserType'));
    const ProfileRole = lazy(() => import('./modules/profilesetup/components/ProfileRole'));
    const ProfileSetup = lazy(() => import('./modules/profilesetup/components/ProfileSetup'));
    const ProfileCompleted = lazy(() => import('./modules/profilesetup/components/ProfileCompleted'));
    const BecomeSeller = lazy(() => import('./modules/become-seller'));
    const BecomeManager = lazy(() => import('./modules/become-manager'));
    const BecomeScholar = lazy(() => import('./modules/become-scholar'));
    const BuyGigs = lazy(() => import('./modules/buy-gigs'));

    const isLogin: boolean = useAppSelector('common.isLogin');
    
    return (
        <>
            <Routes>
                <Route path="/" element={isLogin  ? <Dashboard /> : <Home />} />
                <Route path="/auth" element={<Auth />} />

                <Route path="/signup/verify" element={<CreateAccount />} />
                <Route path="/user-type" element={<UserType />} />
                <Route path="/profile-role" element={<ProfileRole />} />
                <Route path="/profile-setup" element={<ProfileSetup />} />
                <Route path="/profile-completed" element={<ProfileCompleted />} />
                <Route path="/become-a-seller" element={<BecomeSeller />} />
                <Route path="/become-a-manager" element={<BecomeManager />} />
                <Route path="/become-a-scholar" element={<BecomeScholar />} />
                <Route path="/buy-gigs" element={<BuyGigs />} />

                {
                    Navs.map(({ path, key, component }) => (
                        <Route path={path} key={key} element={component} />
                    ))
                }
                {
                    MenuList.map(({ path, key, component }) => (
                        <Route path={path} key={key} element={component} />
                    ))
                }
                
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;