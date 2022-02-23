import gigWhite from '../../../../images/gig-white.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import discord from '../../../../images/discord.svg';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    isSidebarShow: boolean;
    setIsSidebarShow: (isSidebarShow: boolean) => void;
}

const Sidebar = ({
    isSidebarShow,
    setIsSidebarShow
}: Props) => {
    return (
        <>
        <div onClick={() => setIsSidebarShow(false)} className={`${!isSidebarShow ? 'hidden' : 'fixed h-full w-full bg-gray-500 z-40 top-0 left-0 opacity-40'}`}></div>

        <div className={`${isSidebarShow ? 'right-0 ease-out' : '-right-3/4 ease-in'} z-50 top-0 fixed bg-[#fafafa] shadow-md w-3/4 h-full duration-300`}>
            <div className="flex flex-col">
                <div className="flex items-start px-5 space-x-3 py-8">
                    {/* <div className='w-3 h-3'> */}
                        <CloseIcon fontSize="small" className='mt-0.5' onClick={() => setIsSidebarShow(false)} />
                    {/* </div> */}

                    <div className="space-y-3">
                        <div>
                            <h2 className='text-gray-300 font-bold uppercase'>Categories</h2>
                            <div className="flex flex-col py-3 px-5 font-bold text-grayblack space-y-2 text-sm">
                                <p>Token Gigs</p>
                                <p>More Categories</p>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-gray-300 font-bold uppercase'>Resources</h2>
                            <div className="flex flex-col py-3 px-5 font-bold text-grayblack space-y-2 text-sm">
                                <p>Become a Seller</p>
                                <p>Become a Manager</p>
                                <p>Become a Scholar</p>
                                <p>Buy Gigs</p>
                                <p>Guide</p>
                                <p>Communities</p>
                                <p>News</p>
                            </div>
                        </div>
                        <h2 className='text-gray-300 font-bold uppercase'>Gig Pro</h2>
                        <h2 className='text-gray-300 font-bold uppercase'>About</h2>
                    </div>
                </div>
                
                <div className="bg-grayblack w-full text-center p-8 absolute bottom-0 space-y-3">
                    <p className="text-gray-500 text-xxs">More from Doconchain</p>
                    <p className="text-white text-xxs font-bold">DOC Paperless <span className='px-2'>.</span> DOC NFT Studio</p>
                    <img src={gigWhite} alt="Gig Logo White" className='mx-auto w-20' />
                    <p className="text-white text-xxs font-bold">Privacy Policy <span className='px-2'>.</span> Terms of Service</p>
                    <p className='text-xxs text-white'>© Doconchain 2022</p>

                    <div className="flex items-center justify-evenly text-white space-x-3 pt-5">
                        <TelegramIcon />
                        <TwitterIcon />
                        <img src={discord} className="" alt="Discord Icon" />
                        <LinkedInIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;