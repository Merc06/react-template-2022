import { Navigate, Outlet } from 'react-router-dom';
import getToken from './helpers/getToken';


const ProtectedRoutes = () => {
    return getToken() ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;