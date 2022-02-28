import { SyntheticEvent, useEffect } from 'react';
import useAppSelector from '../../../helpers/useAppSelector';
import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';
import { getCategoryList, getSubCategoryList } from '../apis';
import { CategoryProps, OverviewProps } from '../types';

interface Props {
    state: OverviewProps;
    onChange: (e: SyntheticEvent, step: string) => void;
}

const Overview = ({
    state,
    onChange
}: Props) => {
    const categoryList = useAppSelector('createGig.categoryList');
    const subcategoryList = useAppSelector('createGig.subCategoryList');
    const step = "OVERVIEW";

    useEffect(() => {
        getCategoryList();
        getSubCategoryList();
    }, []);


    return (
        <div className='p-2 space-y-4'>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Gig Title <span className='text-red-600'>*</span></p>
                <TextArea
                    value={state.title}
                    name="title"
                    onChange={(e) => onChange(e, step)}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
            <div className="flex flex-col space-y-1">
                <p className='text-xs font-bold'>Category <span className='text-red-600'>*</span></p>
                <div className="flex space-x-3 items-center">
                    <Select
                        value={state.category_id}
                        name="category_id"
                        onChange={(e) => onChange(e, step)}
                        placeholder=""
                        defaultOptionLabel=""
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
                        onChange={(e) => onChange(e, step)}
                        placeholder=""
                        defaultOptionLabel=""
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
                    onChange={(e) => onChange(e, step)}
                    placeholder="I will do something I'm really good at..."
                />
            </div>
        </div>
    );
};

export default Overview;