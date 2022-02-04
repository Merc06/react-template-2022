// import { NavLink } from 'react-router-dom';
// import { Navs } from '../../constants';
import brandLogo from '../../../../images/brand2.png';
import menu from '../../../../images/menu.png';

interface Props {
    isMenuShow: boolean;
    setIsMenuShow: (isMenuShow: boolean) => void;
}

const Header = ({
    isMenuShow,
    setIsMenuShow
}: Props) => {

    return (
        <div className='w-full shadow fixed bg-white z-50 top-0'>
            <div className="flex justify-between items-center p-4">
                <div className='w-24'>
                    <img src={brandLogo} alt="Logo Brand" />
                </div>

                <div className="flex items-center space-x-4">
                    <button className='text-xs uppercase font-bold border border-gray-700 px-3 py-2 shadow rounded'>Login</button>
                    <div
                        className='w-6'
                        onClick={() => setIsMenuShow(!isMenuShow)}
                    >
                        <img src={menu} alt="Menu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;