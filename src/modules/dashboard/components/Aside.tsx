// import { Link } from "react-router-dom";
import noImage from "../../../images/default-avatar.png";
import { useState } from "react";
import useAppSelector from "../../../helpers/useAppSelector";


import { Chevronleft2, ChevronRight } from "../../common/components/Icons";
import { ProfileProps } from "../../common/types";
import Button from "../../common/components/Button";

const Aside = () => {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
    const profile: ProfileProps = useAppSelector('common.profile');

    return (
        <div className="relative">
            <div className={`${isAsideOpen ? 'w-64 p-4 ease-out' : 'w-4 p-0 ease-out'} bg-[#fafafa] shadow-md h-full fixed z-10 duration-200`}>
                <div className={`${isAsideOpen ? 'grid grid-cols-1 divide-y opacity-100 duration-200 delay-100' : 'opacity-0'}`}>
                    <div className="flex items-center space-x-4 py-2">
                        <img src={profile.photo ? profile.photo : noImage} className="w-10 h-10 border border-grayblack rounded-full" alt="Avatar" />
                        <div className="flex flex-col">
                            <p className="text-xxs text-gray-400">Welcome!</p>
                            <h4 className="text-grayblack font-bold">{profile.first_name}</h4>
                        </div>
                    </div>

                    <div className="py-4">
                        <p className="text-sm font-bold uppercase">Seller Stats</p>
                        <div className="text-xs text-gray-500 flex justify-between px-2">
                            <div className="pt-2 space-y-1">
                                <p>Overall rating</p>
                                <p>Total orders this month</p>
                                <p>Order completion</p>
                                <p>Delivered on time</p>
                                <p>This month's earning (DOK)</p>
                            </div>

                            <div className="pt-2 space-y-1">
                                <p>---</p>
                                <p>---</p>
                                <p>---</p>
                                <p>---</p>
                                <p>---</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-4">
                        <p className="text-sm font-bold uppercase">Manager Stats</p>
                        <div className="text-xs text-gray-500 flex justify-between px-2">
                            <div className="pt-2 space-y-1">
                                <p>Overall rating</p>
                                <p>Total scholars</p>
                            </div>

                            <div className="pt-2 space-y-1">
                                <p>---</p>
                                <p>---</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 text-center space-y-3">
                        <small className="text-xxs font-bold">* Get Gig Pro to start building your team.</small>
                        <Button className="uppercase px-3 bg-grayblack text-white">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={`${isAsideOpen ? 'left-[15.3rem] ease-out' : 'left-2 ease-out'} rounded-full bg-[#fafafa] shadow-md h-5 w-5 z-20 fixed flex items-center justify-center top-24 duration-200`}
                onClick={() => setIsAsideOpen(!isAsideOpen)}
            >
                {
                    isAsideOpen ?
                    <Chevronleft2 className="w-3 h-3" /> :
                    <ChevronRight className="w-3 h-3" />
                }
            </div>

        </div>
    );
};

export default Aside;