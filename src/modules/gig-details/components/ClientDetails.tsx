import { StarIcon } from '../../common/components/Icons';
import noImage from '../../../images/default-avatar.png';
import { useLocation } from 'react-router-dom';
import { AllGigListProps } from '../../gig-post/types';


const ClientDetails = () => {
    const location = useLocation();
    const state = location.state as AllGigListProps;
    
    return (
        <div className="bg-gray-200 shadow-sm p-2 mx-3">
            <div className="flex flex-col divide-y divide-gray-300">
                <div className="flex space-x-5 p-2 mb-4">
                    <div className="w-1/5">
                        {
                            state.client[0]?.photo ?
                            <img src={state.client[0].photo} alt="Profile Illustration" className="rounded-full w-16 h-16 object-cover object-center" /> :
                            <img src={noImage} alt="Profile Illustration" className="rounded-full w-16 h-16 object-cover object-center" />
                        }
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-col items space-y-2 text-xs font-semibold text-gray-500">
                            <h1 className="text-gray-700 font-bold">{state.client[0]?.first_name} {state.client[0]?.last_name}</h1>
                            <h1>---</h1>
                            <h1>Followers</h1>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex flex-col">
                    <div className="text-gray-500 items-center space-x-1 flex text-xs font-semibold uppercase">
                        <h1>---</h1>
                        <StarIcon className="text-xs" />
                        <h1>('--- reviews')</h1>
                    </div>
                    <h1 className="text-gray-500 text-xs font-semibold uppercase">---</h1>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;