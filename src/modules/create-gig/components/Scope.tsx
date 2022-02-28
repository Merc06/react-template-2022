import React, { useState } from 'react';
import Input from '../../common/components/Input';
import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';
import Toggle from '../../common/components/Toggle';

const Scope = () => {
    const [isQoutationCheck, setIsQoutationCheck] = useState<boolean>(false);

    const onChange = (): void => {
        console.log("Clicked")
    }

    return (
        <div className='space-y-4'>
            <div className="flex items-center justify-between">
                <p className='text-sm font-bold'>Packages</p>
                <div className='flex items-center space-x-3'>
                    <p className='text-xs italic'>Allow Qoutation</p>
                    <Toggle
                        checked={isQoutationCheck}
                        onChecked={() => setIsQoutationCheck(!isQoutationCheck)}
                        checkedLabel="On"
                        unCheckedLabel="Off"
                    />
                </div>
            </div>

             <table className="">
                <thead className='text-xs'>
                    <tr>
                        <th></th>
                        <th>BASIC</th>
                        <th>STANDARD</th>
                        <th>PREMIUM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p className='text-xs w-20 font-bold'>Package Name <span className='text-red-600'>*</span></p></td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><p className='text-xs w-20 font-bold'>Package Description <span className='text-red-600'>*</span></p></td>
                        <td>
                            <TextArea
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                        <td>
                            <TextArea
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                        <td>
                            <TextArea
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="Package name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><p className='text-xs w-20 font-bold'>Delivery TIme <span className='text-red-600'>*</span></p></td>
                        <td>
                            <Select
                                value={''}
                                name="category"
                                onChange={onChange}
                                placeholder=""
                                defaultOptionLabel=""
                                options={[{label: "-", value: "-"}]}
                            />
                        </td>
                        <td>
                            <Select
                                value={''}
                                name="category"
                                onChange={onChange}
                                placeholder=""
                                defaultOptionLabel=""
                                options={[{label: "-", value: "-"}]}
                            />
                        </td>
                        <td>
                            <Select
                                value={''}
                                name="category"
                                onChange={onChange}
                                placeholder=""
                                defaultOptionLabel=""
                                options={[{label: "-", value: "-"}]}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><p className='text-xs w-20 font-bold'>Price(DOK) <span className='text-red-600'>*</span></p></td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="0"
                            />
                        </td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="0"
                            />
                        </td>
                        <td>
                            <Input
                                value={''}
                                name="title"
                                onChange={onChange}
                                placeholder="0"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Scope;