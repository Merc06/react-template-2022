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
        <div className={`${isMenuShow ? 'top-16 ease-out' : 'top-0 ease-in'} fixed bg-[#ffc92c] shadow-md text-white w-full py-6 duration-300 `}>
            <div className="flex justify-evenly text-xs">
            {
                Navs.map(({ key, path, label }) => (
                    <NavLink 
                        onClick={() => setIsMenuShow(false)}
                        key={key} 
                        to={path}
                        className={(navData) => navData.isActive ? "text-[#262626] font-bold" : "text-white" }
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