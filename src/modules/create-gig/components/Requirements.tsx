import Button from '../../common/components/Button';

const Requirements = () => {
    // const onChange = (): void => {
    //     console.log("Clicked")
    // }
    
    return (
        <div className='p-4'>
            <div className="flex flex-col space-y-1 pb-3 mb-3 border-b border-gray-200">
                <p className='text-xs font-bold'>Get all the information you need from buyers to get started</p>
                <small className='text-xxs text-gray-400'>Add questions to help buyers provide you with exactly what you need to start working on their order.</small>
            </div>
            <Button
                className='text-blue-700 font-bold text-xs w-30'
            >
                + ADD QUESTION
            </Button>
        </div>
    );
};

export default Requirements;