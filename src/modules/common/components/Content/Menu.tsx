import { NavLink } from 'react-router-dom';
import { Navs } from '../../constants/navlist-routes';

interface Props {
    isMenuShow: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
}

const Menu = ({
    isMenuShow,
    setIsMenuShow
}: Props) => {
    return (
        <div className={`${isMenuShow ? 'top-16 ease-out' : 'top-0 ease-in'} fixed bg-yellow-500 text-white w-full p-4 duration-300 `}>
            <div className="flex justify-evenly text-sm">
            {
                Navs.map(({ key, path, label }) => (
                    <NavLink 
                        onClick={() => setIsMenuShow(false)}
                        key={key} 
                        to={path}
                        className={(navData) => navData.isActive ? "text-blue-200 font-bold" : "text-white" }
                    >
                        {label}
                    </NavLink>
                ))
            }
            </div>
        </div>
    );
};

export default Menu;