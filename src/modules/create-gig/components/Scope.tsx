import _ from 'lodash';
import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect } from 'react';
import Input from '../../common/components/Input';
import Select from '../../common/components/Select';
import TextArea from '../../common/components/TextArea';
import Toggle from '../../common/components/Toggle';
import { getScopeList } from '../apis';
import { DELIVERY_TIME } from '../constants/deliveryTime';
import { PackageProps } from '../types';

interface Props {
    isQoutationCheck: boolean;
    setIsQoutationCheck: Dispatch<SetStateAction<boolean>>;
    isBasicCheck: boolean;
    setIsBasicCheck: Dispatch<SetStateAction<boolean>>;
    isStandardCheck: boolean;
    setIsStandardCheck: Dispatch<SetStateAction<boolean>>;
    isPremiumCheck: boolean;
    setIsPremiumCheck: Dispatch<SetStateAction<boolean>>;
    basicState: PackageProps;
    setBasicState: Dispatch<SetStateAction<PackageProps>>;
    standardState: PackageProps;
    setStandardState:Dispatch<SetStateAction<PackageProps>>;
    premiumState: PackageProps;
    setPremiumState: Dispatch<SetStateAction<PackageProps>>;
}

const Scope = ({
    isQoutationCheck,
    setIsQoutationCheck,
    isBasicCheck,
    setIsBasicCheck,
    isStandardCheck,
    setIsStandardCheck,
    isPremiumCheck,
    setIsPremiumCheck,
    basicState,
    setBasicState,
    standardState,
    setStandardState,
    premiumState,
    setPremiumState
}: Props) => {
    const gigId = localStorage.getItem('gigId');

    const tableStyle = {
        width: "600px"
    }
    const BASIC = "BASIC";
    const STANDARD = "STANDARD";
    const PREMIUM = "PREMIUM";

    useEffect(() => {
        getScope();
        // eslint-disable-next-line
    }, []);

    const checkIsCheck = (res: Array<PackageProps>): void => {
        !_.isEmpty(res) && setIsQoutationCheck(true);
        const isBasicExist = res.some((item) => item.package === 'BASIC' && (item.package_name || item.package_description || item.delivery_time || item.price));
        const isStandardExist = res.some((item) => item.package === 'STANDARD' && (item.package_name || item.package_description || item.delivery_time || item.price));
        const isPremiumExist = res.some((item) => item.package === 'PREMIUM' && (item.package_name || item.package_description || item.delivery_time || item.price));
        isBasicExist && setIsBasicCheck(true);
        isStandardExist && setIsStandardCheck(true);
        isPremiumExist && setIsPremiumCheck(true);
    }

    const getScope = (): void => {
        gigId && getScopeList(+gigId, (res) => {
            console.log(res)
            if (!_.isEmpty(res)) {
                checkIsCheck(res);

                res.map((item, index) => (
                    item.package === 'BASIC' ?
                    setBasicState(res[index]) :
                    item.package === 'STANDARD' ?
                    setStandardState(res[index]) :
                    setPremiumState(res[index])
                ))
            }
        });
    }

    const onChange = (e: SyntheticEvent, type: "BASIC" | "STANDARD" | "PREMIUM"): void => {
        const { name, value } = e.target as HTMLInputElement;
        type === "BASIC" ?
        setBasicState({
            ...basicState,
            [name]: value
        }) :
        type === "STANDARD" ?
        setStandardState({
            ...standardState,
            [name]: value
        }) :
        setPremiumState({
            ...premiumState,
            [name]: value
        })
    }


    return (
        <div className='space-y-4'>
            <div className="flex items-center justify-between">
                <p className='text-sm font-bold'>Packages</p>
                <div className='flex items-center space-x-3'>
                    <p className='text-xs italic'>Allow Qoutation Request</p>
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
            
            <div className="overflow-x-auto pb-3">
                <table style={tableStyle}>
                    <thead className='text-xs'>
                        <tr className='w-full'>
                            <th></th>
                            <th>
                                <div className="flex items-center justify-center space-x-1">
                                    <p>BASIC</p>
                                    <Toggle
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
                                    value={basicState.package_name}
                                    name="package_name"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter package name..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.package_name}
                                    name="package_name"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter package name..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.package_name}
                                    name="package_name"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter package name..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Package Description <span className='text-red-600'>*</span></p></td>
                            <td>
                                <TextArea
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={basicState.package_description}
                                    name="package_description"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter package description..."
                                />
                            </td>
                            <td>
                                <TextArea
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.package_description}
                                    name="package_description"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter package description..."
                                />
                            </td>
                            <td>
                                <TextArea
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.package_description}
                                    name="package_description"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter package description..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Delivery TIme <span className='text-red-600'>*</span></p></td>
                            <td>
                                <Select
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={basicState.delivery_time}
                                    name="delivery_time"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder=""
                                    defaultOptionLabel=""
                                    options={DELIVERY_TIME.map((item) => (
                                        {label: item, value: item}
                                    ))}
                                />
                            </td>
                            <td>
                                <Select
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.delivery_time}
                                    name="delivery_time"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder=""
                                    defaultOptionLabel=""
                                    options={DELIVERY_TIME.map((item) => (
                                        {label: item, value: item}
                                    ))}
                                />
                            </td>
                            <td>
                                <Select
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.delivery_time}
                                    name="delivery_time"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder=""
                                    defaultOptionLabel=""
                                    options={DELIVERY_TIME.map((item) => (
                                        {label: item, value: item}
                                    ))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Price(DOK) <span className='text-red-600'>*</span></p></td>
                            <td>
                                <Input
                                    type='number'
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={+basicState.price}
                                    name="price"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter DOK price..."
                                />
                            </td>
                            <td>
                                <Input
                                    type='number'
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={+standardState.price}
                                    name="price"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter DOK price..."
                                />
                            </td>
                            <td>
                                <Input
                                    type='number'
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={+premiumState.price}
                                    name="price"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter DOK price..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Package Inclusion 1</p></td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={basicState.inclusion_one}
                                    name="inclusion_one"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter inclusion 1..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.inclusion_one}
                                    name="inclusion_one"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter inclusion 1..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.inclusion_one}
                                    name="inclusion_one"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter inclusion 1..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Package Inclusion 2</p></td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={basicState.inclusion_two}
                                    name="inclusion_two"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter inclusion 2..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.inclusion_two}
                                    name="inclusion_two"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter inclusion 2..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.inclusion_two}
                                    name="inclusion_two"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter inclusion 2..."
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><p className='text-xs w-20 font-bold'>Package Inclusion 3</p></td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isBasicCheck}
                                    value={basicState.inclusion_three}
                                    name="inclusion_three"
                                    onChange={(e) => onChange(e, BASIC)}
                                    placeholder="Enter inclusion 3..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isStandardCheck}
                                    value={standardState.inclusion_three}
                                    name="inclusion_three"
                                    onChange={(e) => onChange(e, STANDARD)}
                                    placeholder="Enter inclusion 3..."
                                />
                            </td>
                            <td>
                                <Input
                                    disabled={!isQoutationCheck || !isPremiumCheck}
                                    value={premiumState.inclusion_three}
                                    name="inclusion_three"
                                    onChange={(e) => onChange(e, PREMIUM)}
                                    placeholder="Enter inclusion 3..."
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