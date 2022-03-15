import React, { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import { Menubar } from '../../constants/routes';
import Button from '../Button';
import PersonIcon from '@mui/icons-material/Person';

interface Props {
    isMenuListShow: boolean;
    setIsMenuListShow: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({
    isMenuListShow,
    setIsMenuListShow
}: Props) => {
    const removeGigId = (): void => {
        localStorage.getItem('gigId') && localStorage.removeItem('gigId');
        setIsMenuListShow(false)
    }

    return (
        <div className='fixed bottom-0 w-full z-40 py-4 bg-[#fafafa] border-t border-gray-200'>
            <div className="flex justify-evenly">
                {
                    Menubar.map(({ key, path, icon }) => (
                        <NavLink onClick={removeGigId} to={path} key={key} className={navLink => (!navLink.isActive ? 'text-gray-400' : 'text-grayblack')}>
                            {icon}
                        </NavLink>
                    ))
                }
                <Button
                    className={`${isMenuListShow ? 'text-grayblack' : 'text-gray-400'} py-0`}
                    onClick={() => setIsMenuListShow(!isMenuListShow)}
                >
                    <PersonIcon fontSize="large" />
                </Button>
            </div>
        </div>
    );
};

export default Menu;