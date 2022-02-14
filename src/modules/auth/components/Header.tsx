import brandLogo from '../../../images/brand2.png';
import imgLogin from '../../../images/img-login.png';
import gig from '../../../images/gig.png';

const Header = () => {
    return (
        <div className='mb-5'>
            <div className='w-20'><img src={brandLogo} alt="Doc-Gig Brand" /></div>
            <div className='w-full'><img src={imgLogin} className="max-h-64 mx-auto" alt="Doc-Gig Brand" /></div>
            <h1 className='text-xl font-bold text-center text-grayblack'>The blockchain-powered</h1>
            <div className="flex justify-center items-center space-x-3">
                <div className='w-14'><img src={gig} alt="Gig" /></div>
                <h1 className='text-xl font-bold text-grayblack'>marketplace</h1>
            </div>
        </div>
    );
};

export default Header;