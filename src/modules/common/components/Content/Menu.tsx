import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from '../../constants/routes';

const Menu = () => {
    const removeGigId = (): void => {
        localStorage.getItem('gigId') && localStorage.removeItem('gigId');
    }

    return (
        <div className='fixed bottom-0 w-full z-30 py-4 bg-[#fafafa]'>
            <div className="flex justify-evenly">
                {
                    MenuList.map(({ key, path, icon }) => (
                        <NavLink onClick={removeGigId} to={path} key={key} className={navLink => (!navLink.isActive ? 'text-gray-400' : 'text-grayblack')}>
                            {icon}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Menu;