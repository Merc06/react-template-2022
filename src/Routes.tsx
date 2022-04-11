import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';


const Router = () => {
    const PageNotFound = lazy(() => import('./modules/common/components/PageNotFound'));

    const Home = lazy(() => import('./modules/home'));

    // const isLogin: boolean = useAppSelector('common.isLogin');
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;