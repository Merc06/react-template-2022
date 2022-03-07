import { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';
import { getCategoryList, getOverviewInfo, getSubCategoryList } from '../apis';
import { CategoryProps, OverviewProps } from '../types';

interface Props {
    state: OverviewProps;
    setState: Dispatch<SetStateAction<OverviewProps>>;
}

const Overview = ({
    state,
    setState,
}: Props) => {
    const gigId = localStorage.getItem('gigId');
    const categoryList = useAppSelector('createGig.categoryList');
    const subcategoryList = useAppSelector('createGig.subCategoryList');

    useEffect(() => {
        getOverview();
        getCategoryList();
        getSubCategoryList();
        // eslint-disable-next-line
    }, [])

    const getOverview = (): void => {
        gigId && getOverviewInfo(+gigId, (res) => {
            setState(res);
        });
    }

    const onChange = (e: SyntheticEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <div className='p-2 space-y-4'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Gig Title <span className='text-red-600'>*</span></p>
                <TextArea
                    value={state.title}
                    name="title"
                    onChange={onChange}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Category <span className='text-red-600'>*</span></p>
                <div className="flex space-x-3 items-center">
                    <Select
                        value={state.category_id}
                        name="category_id"
                        onChange={onChange}
                        placeholder="Token"
                        hasDefaultOption
                        defaultOptionLabel="Select Category"
                        options={
                            categoryList.map(({ id, name }: CategoryProps) => (
                                {
                                    label: name,
                                    value: id
                                }
                            ))
                        }
                    />
                    <Select
                        value={state.subcategory_id}
                        name="subcategory_id"
                        onChange={onChange}
                        placeholder="Select Sub-category"
                        defaultOptionLabel="Select Sub-category"
                        options={
                            subcategoryList.map(({ id, name }: CategoryProps) => (
                                {
                                    label: name,
                                    value: id
                                }
                            ))
                        }
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Search Tags <span className='text-red-600'>*</span></p>
                <TextArea
                    value={state.tag}
                    name="tag"
                    onChange={onChange}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
        </div>
    );
};

export default Overview;