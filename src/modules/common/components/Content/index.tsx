import React, { ReactNode, useState } from 'react';
import getToken from '../../../../helpers/getToken';
import Header from './Header';
import Menu from './Menu';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {
    const [isMenuShow, setIsMenuShow] = useState<boolean>(false);
    const token = getToken();

    return (
        <>
            {
                token &&
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
            <div className={`${token && 'mt-16'}`}>
                {children}
            </div>
        </>
    );
};

export default Content;