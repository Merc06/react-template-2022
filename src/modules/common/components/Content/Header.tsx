// import { NavLink } from 'react-router-dom';
// import { Navs } from '../../constants';
// import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import useAppSelector from '../../../../helpers/useAppSelector';
import brandLogo from '../../../../images/brand2.png';
// import menu from '../../../../images/menu.png';
// import { ProfileProps } from '../../types';
import { IconHamburger } from '../Icons';
import dispatch from '../../../../helpers/dispatch';
import { resetAuth, setProfile } from '../../reducers';
// import { getProfile } from '../../apis';

interface Props {
    isSidebarShow: boolean;
    setIsSidebarShow: (isSidebarShow: boolean) => void;
    isLogin: boolean;
}

const Header = ({
    isSidebarShow,
    setIsSidebarShow,
    isLogin
}: Props) => {
    const navigate = useNavigate();
    // const profile: ProfileProps = useAppSelector('common.profile');

    const onLogout = () => {
        localStorage.clear();
        navigate('/auth');
        dispatch(resetAuth(false));
        dispatch(setProfile({}));
    };

    return (
        <>
        <div className='w-full shadow fixed bg-white z-30 top-0'>
            <div className="flex justify-between items-center p-4">
                <Link to="/" className='w-24 cursor-pointer'>
                    <img src={brandLogo} alt="Logo Brand" />
                </Link>

                <div className="flex items-center space-x-3">
                    {
                        !isLogin ?
                        <Link
                            to="/auth"
                            className='font-bold text-xs uppercase border border-grayblack px-4 text-xxs py-1 rounded-lg'
                        >
                            Login
                        </Link> :
                        <div
                            onClick={onLogout}
                            className='font-bold text-xs uppercase border border-grayblack px-4 text-xxs py-1 rounded-lg'
                        >
                            Logout
                        </div> 
                    }
                    <div
                        className='w-6'
                        onClick={() => setIsSidebarShow(!isSidebarShow)}
                    >
                        <IconHamburger />
                    </div> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;
