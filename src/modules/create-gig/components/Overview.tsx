import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';

const Overview = () => {
    const onChange = (): void => {
        console.log("Clicked")
    }

    return (
        <div className='p-4 space-y-4'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Gig Title <span className='text-red-600'>*</span></p>
                <TextArea
                    value={''}
                    name="title"
                    onChange={onChange}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Category <span className='text-red-600'>*</span></p>
                <div className="flex space-x-3 items-center">
                    <Select
                        value={''}
                        name="category"
                        onChange={onChange}
                        placeholder="Token"
                        defaultOptionLabel="Token"
                        options={[{label: "---", value: "---"}]}
                    />
                    <Select
                        value={''}
                        name="subcategory"
                        onChange={onChange}
                        placeholder="Sub Category"
                        defaultOptionLabel="Sub Category"
                        options={[{label: "----", value: "----"}]}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Search Tags <span className='text-red-600'>*</span></p>
                <TextArea
                    value={''}
                    name="searchtags"
                    onChange={onChange}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
        </div>
    );
};

export default Overview;