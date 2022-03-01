import React, { useState } from 'react';
import Input from '../../common/components/Input';
import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';
import Toggle from '../../common/components/Toggle';

const Scope = () => {
    const [isQoutationCheck, setIsQoutationCheck] = useState<boolean>(false);
    const [isBasicCheck, setIsBasicCheck] = useState<boolean>(false);
    const [isStandardCheck, setIsStandardCheck] = useState<boolean>(false);
    const [isPremiumCheck, setIsPremiumCheck] = useState<boolean>(false);
    const tableStyle = {
        width: "600px",
    }

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
                        onChecked={() => {
                            setIsQoutationCheck(!isQoutationCheck);
                            setIsBasicCheck(false);
                            setIsStandardCheck(false);
                            setIsPremiumCheck(false);
                        }}
                        checkedLabel="Yes"
                        unCheckedLabel="No"
                    />
                </div>
            </div>
            
            <div className="overflow-x-auto">
                <table style={tableStyle}>
                    <thead className='text-xs'>
                        <tr className='w-full'>
                            <th></th>
                            <th>
                                <div className="flex items-center justify-center space-x-1">
                                    <p>BASIC</p>
                                    <Toggle
                                        disabled={!isQoutationCheck}
                                        checked={isBasicCheck}
                                        onChecked={() => setIsBasicCheck(!isBasicCheck)}
                                        checkedLabel="Yes"
                                        unCheckedLabel="No"
                                    />
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center justify-center space-x-1">
                                    <p>STANDARD</p>
                                    <Toggle
                                        disabled={!isQoutationCheck}
                                        checked={isStandardCheck}
                                        onChecked={() => setIsStandardCheck(!isStandardCheck)}
                                        checkedLabel="Yes"
                                        unCheckedLabel="No"
                                    />
                                </div>
                            </th>
                            <th>
                                <div className="flex items-center justify-center space-x-1">
                                    <p>PREMIUM</p>
                                    <Toggle
                                        disabled={!isQoutationCheck}
                                        checked={isPremiumCheck}
                                        onChecked={() => setIsPremiumCheck(!isPremiumCheck)}
                                        checkedLabel="Yes"
                                        unCheckedLabel="No"
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Package Name <span className='text-red-600'>*</span></p></td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Package name"
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Package name"
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
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
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Package description"
                                />
                            </td>
                            <td>
                                <TextArea
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Package description"
                                />
                            </td>
                            <td>
                                <TextArea
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="Package description"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Delivery TIme <span className='text-red-600'>*</span></p></td>
                            <td>
                                <Select
                                    disabled={!isQoutationCheck || !isBasicCheck}
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
                                    disabled={!isQoutationCheck || !isStandardCheck}
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
                                    disabled={!isQoutationCheck || !isPremiumCheck}
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
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="0"
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={''}
                                    name="title"
                                    onChange={onChange}
                                    placeholder="0"
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
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
        </div>
    );
};

export default Scope;