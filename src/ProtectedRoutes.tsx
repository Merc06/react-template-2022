import { Navigate, Outlet } from 'react-router-dom';
import useAppSelector from './helpers/useAppSelector';


const ProtectedRoutes = () => {
    const isLogin: boolean = useAppSelector('common.isLogin');

    return isLogin ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default ProtectedRoutes;