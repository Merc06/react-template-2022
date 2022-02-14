import Form from './components/Form';
import Header from './components/Header';
import LoginWithDoc from './components/LoginWithDoc';


const Auth = () => {
    return (
        <div className='p-4 mx-8'>
            <Header />
            <LoginWithDoc />
            <div className="relative my-3">
                <p className="text-gray-300 bg-[#fafafa] absolute top-0 left-1/2 -translate-x-2/4 px-3 text-xs">OR</p>
                <div className='border-b border-gray-300 pt-2' />
            </div>
            <Form />
            <div className="flex justify-center items-center space-x-2 pt-4 pb-7 border-t border-gray-300">
                <h1 className="text-xs text-blue-700">Terms of Use</h1>
                <h1 className="text-xs text-blue-700">•</h1>
                <h1 className="text-xs text-blue-700">Privacy Policy</h1>
            </div>
        </div>
    );
};

export default Auth;