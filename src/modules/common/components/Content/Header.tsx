import { NavLink } from 'react-router-dom';
import { Navs } from '../../constants';

const Header = () => {

    return (
        <div className='w-full border-gray-500 shadow bg-gray-300'>
            <div className="flex justify-center py-2 space-x-3">
            {
                Navs.map(({ key, path, label }) => (
                    <NavLink 
                        key={key} 
                        to={path}
                        className={(navData) => navData.isActive ? "text-blue-700 font-bold" : "text-gray-600" }
                    >
                        {label}
                    </NavLink>
                ))
            }
            </div>
        </div>
    );
};

export default Header;