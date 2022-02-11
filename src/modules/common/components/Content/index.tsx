import React, { ReactNode, useState } from 'react';
import useAppSelector from '../../../../helpers/useAppSelector';
import { ProfileProps } from '../../types';
import Header from './Header';
import Menu from './Menu';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {
    const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
    const profile: ProfileProps = useAppSelector('common.profile');

    return (
        <>
            {
                profile.first_name &&
                <>
                    <Header
                        isMenuShow={isMenuShow}
                        setIsMenuShow={setIsMenuShow}
                    />
                    <Menu
                        isMenuShow={isMenuShow}
                        setIsMenuShow={setIsMenuShow}
                    />
                </>
            }
            <div className={`${profile.first_name && 'mt-16'}`}>
                {children}
            </div>
        </>
    );
};

export default Content;