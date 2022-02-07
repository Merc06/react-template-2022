import { Link } from "react-router-dom";
import gigs from "../../../images/token-gigs.png";
import { ChevronRight, IconPlay } from "../../common/components/Icons";

const Banner = () => {
    return (
        <div className="bg-[#ffc92c] flex flex-col items-center justify-center space-y-3 p-8">
            <div className="w-full"><img src={gigs} alt="Token Gigs title" /></div>
            <button
                className="uppercase flex items-center justify-center space-x-3 text-sm font-bold text-white bg-[#262626] rounded-xl px-4 py-1"
            >
                <p>Explore Gigs</p>
                <span><ChevronRight /></span>
            </button>

            <Link to="/"
                className="flex items-center justify-center space-x-1 text-xs pt-3"
            >
                <span><IconPlay /></span>
                <p>How DOC Gig Works</p>
            </Link>
        </div>
    );
};

export default Banner;