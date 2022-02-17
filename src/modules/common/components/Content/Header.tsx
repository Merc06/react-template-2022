// import { NavLink } from 'react-router-dom';
// import { Navs } from '../../constants';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAppSelector from '../../../../helpers/useAppSelector';
import brandLogo from '../../../../images/brand2.png';
import menu from '../../../../images/menu.png';
import noImage from '../../../../images/default-avatar.png';
import { ProfileProps } from '../../types';
import Button from '../Button';
import { ChevronDown } from '../Icons';
import dispatch from '../../../../helpers/dispatch';
import { resetAuth, setProfile } from '../../reducers';
import { DropdownList } from '../../constants/routes';
// import { getProfile } from '../../apis';

interface Props {
    isMenuShow: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
}

const Header = ({
    isMenuShow,
    setIsMenuShow
}: Props) => {
    const navigate = useNavigate();
    const profile: ProfileProps = useAppSelector('common.profile');
    const isLogin: boolean = useAppSelector('common.isLogin');
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
    
    // useEffect(() => {
    //     getProfile();
    // }, [])

    const onLogout = () => {
        localStorage.clear();
        navigate('/auth');
        dispatch(resetAuth(false));
        dispatch(setProfile({}));
        setIsDropDownOpen(false);
    };

    return (
        <>
        <div className='w-full shadow fixed bg-white z-40 top-0'>
            <div className="flex justify-between items-center p-4">
                <Link to="/" className='w-24 cursor-pointer'>
                    <img src={brandLogo} alt="Logo Brand" />
                </Link>

                <div className="flex items-center space-x-3">
                    {
                        !isLogin ?
                        <Link
                            to="/auth"
                            className='font-bold text-xs uppercase border border-grayblack px-3 text-xxs py-2 rounded-lg'
                        >
                            Login
                        </Link> :
                        <Button
                            className='flex items-center border space-x-5 py-0.5 border-grayblack px-2'
                            onClick={() => {
                                setIsDropDownOpen(!isDropDownOpen);
                                setIsMenuShow(false);
                            }}
                        >
                            <div className='space-x-2 flex items-center'>
                                <div className="h-4 w-4">
                                    <img
                                        src={ profile.photo ? profile.photo : noImage }
                                        alt="Avatar"
                                        className='rounded-full bg-gray-800 border border-grayblack h-4 w-4'
                                    />
                                </div>
                                <p className='capitalize font-bold'>
                                    { profile.first_name ? profile.first_name : 'User' }
                                </p>
                            </div>
                            <div><ChevronDown /></div>
                        </Button>
                    }
                    <div
                        className='w-6'
                        onClick={() => {
                            setIsMenuShow(!isMenuShow);
                            setIsDropDownOpen(false);
                        }}
                    >
                        <img src={menu} alt="Menu" />
                    </div> 
                </div>
            </div>
        </div>

        <div className={`fixed shadow-md z-50 bg-accent rounded-md right-12 top-12 text-grayblack text-xs ${!isDropDownOpen ? 'p-0 h-0' : 'p-4 h-auto'}`}>
            <div className={`${!isDropDownOpen ? 'hidden' : 'inline'} space-y-2 flex flex-col`}>
                {
                    DropdownList.map(({ key, path, label }) => (
                        <NavLink 
                            onClick={() => setIsDropDownOpen(false)}
                            key={key} 
                            to={path}
                            className={(navData) => navData.isActive ? "text-blue-600 font-bold" : "text-grayblack" }
                        >
                            {label}
                        </NavLink>
                    ))
                }
                <div
                    className='border-t border-gray-600 pt-2 cursor-pointer'
                    onClick={onLogout}
                >
                    Logout
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;