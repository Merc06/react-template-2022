import brush from '../../../images/brush.png';
import Button from '../../common/components/Button';
import { IconPlay } from '../../common/components/Icons';

const Header = () => {
    return (
        <div className="flex flex-col items-center py-5 space-y-4 bg-ytbg bg-cover bg-no-repeat relative px-7">
            <div className="flex relative justify-center items-center w-full mb-3">
                <h1 className="font-bold uppercase text-sm tracking-wide text-center text-white z-10">Token Gigs</h1>
                <img src={brush} alt="Token Gig Illustration" className="object-contain absolute w-60" />
            </div>
            <h1 className="font-bold uppercase text-lg tracking-wide text-center text-white z-10">Influencers</h1>
            <p className="text-xs leading-relaxed font-medium text-center z-10 text-white">
                Grow your brand with the help of our influencers and marketing experts.
            </p>
            <div className="flex justify-center pt-2 z-10">
                <Button
                    className="uppercase text-xs flex items-center text-white space-x-2 font-semibold py-2 px-4 border border-white rounded-xl">
                    <IconPlay />
                    <h1 className="text-xs text-white">How Doc Gig Works</h1>
                </Button>
            </div>
        </div>
    );
};

export default Header;