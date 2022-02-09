import Modal from '../../common/components/Modal';
import mail from '../../../images/mail.png';

interface Props {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    email: string;
}

const VerifiedModal = ({
    isModalOpen,
    setIsModalOpen,
    email
}: Props) => {
    return (
        <Modal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            hideHeader
        >
            <div className='flex flex-col text-center space-y-3 mx-5'>
                <div className='w-2/3 mx-auto'><img src={mail} alt="Mail" /></div>
                <h1 className="font-bold text-xl">Check your inbox</h1>
                <p className="text-xs text-gray-400">We just emailed a confirmation link to <span className='text-gray-600 font-bold'>{email}</span> Click the link, and you’ll be signed in.</p>
            </div>
        </Modal>
    );
};

export default VerifiedModal;