import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAppSelector from '../../../../helpers/useAppSelector';
import noImage from '../../../../images/default-img.png';
import { getProfile } from '../../apis';
import { logout } from '../../constants/logout';
import { ProfileMenuList } from '../../constants/routes';

interface Props {
    isMenuListShow: boolean;
    setIsMenuListShow: Dispatch<SetStateAction<boolean>>;
}

const MenuList = ({
    isMenuListShow,
    setIsMenuListShow
}: Props) => {
    const navigate = useNavigate();
    const profileInfo = useAppSelector('common.profile');

    useEffect(() => {
        getProfile();
    })

    const onLogout = () => {
        logout();
        navigate('/auth');
        setIsMenuListShow(false);
    };
    
    return (
        <div
            className={`
                ${!isMenuListShow ? '-bottom-[21rem] ease-in' : 'bottom-[4.1rem] ease-out'}
                fixed right-0 bg-grayblack px-6 py-8 text-gray-400 w-full z-40 opacity-95 duration-300
            `}
        >
            <div className="flex items-center space-x-4">
                {
                    profileInfo.photo ?
                    <img src={profileInfo.photo} alt="Profile Pic" className='w-16 h-16 rounded' /> :
                    <img src={noImage} alt="Default" className='w-16 h-16 rounded' />
                }
                <div className="flex flex-col">
                    <h4 className='text-sm font-bold text-[#fafafa]'>{profileInfo.last_name}, {profileInfo.first_name}</h4>
                    <h4 className='text-xs font'>
                        {profileInfo.profile_type === 'Seller' ? profileInfo.profile_role : profileInfo.profile_type}
                    </h4>
                </div>
            </div>

            <div className="flex flex-col space-y-2 py-6 text-sm">
                {
                    ProfileMenuList.map(({ path, label, key }) => (
                        <NavLink
                            onClick={() => setIsMenuListShow(false)}
                            to={path}
                            key={key}
                            className={navLink => (!navLink.isActive ? 'text-gray-400' : 'text-[#fafafa] font-bold')}
                        >
                            {label}
                        </NavLink>
                    ))
                }
            </div>

            <div
                className="pt-5 border-t border-gray-400"
                onClick={onLogout}
            >
                <p className='py-0 text-sm cursor-pointer text-[#fafafa]'>Log Out</p>
            </div>
        </div>
    );
};

export default MenuList;