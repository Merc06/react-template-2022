
import { Navigate } from 'react-router-dom';
import useAppSelector from '../../../helpers/useAppSelector';
import { ProfileProps } from '../types';

const useCheckIsAccoutSetupCompleted = () => {
    const profile: ProfileProps = useAppSelector('common.profile');
    
    !profile.first_name && <Navigate to="/user-type" />;
}

export default useCheckIsAccoutSetupCompleted;