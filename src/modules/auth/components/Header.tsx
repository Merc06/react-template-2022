// import brandLogo from '../../../images/brand2.png';
// import imgLogin from '../../../images/img-landing-banner-graphic-v2.png';
// import gig from '../../../images/gig.png';
import GigLogo from '../../../images/GigLogo.png';

interface Props {
    type: 'SIGNUP' | 'LOGIN';
}

const Header = ({ type }: Props) => {
    
    return (
        <div className='py-20 flex space-x-1 justify-center'>
            {/* <div className='w-20'><img src={brandLogo} alt="Doc-Gig Brand" /></div>
            <div className='w-full'><img src={imgLogin} className="max-h-64 mx-auto" alt="Doc-Gig Brand" /></div>
            <h1 className='text-xl font-bold text-center text-grayblack'>The blockchain-powered</h1>
            <div className="flex justify-center items-center space-x-3">
                <div className='w-14'><img src={gig} alt="Gig" /></div>
                <h1 className='text-xl font-bold text-grayblack'>marketplace</h1>
            </div> */}

            <h1 className="text-2xl font-semibold text-gray-900 mt-1">{type === "LOGIN" ? "Login" : "Signup"} to</h1> 
            <div className='object-contain w-32'><img src={GigLogo} alt="Gig" /></div>
        </div>
    );
};

export default Header;