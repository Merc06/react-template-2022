import React, { ReactNode, useState } from 'react';
import Header from './Header';
import Menu from './Menu';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {
    const [isMenuShow, setIsMenuShow] = useState<boolean>(false);

    return (
        <>
            <Header
                isMenuShow={isMenuShow}
                setIsMenuShow={setIsMenuShow}
            />
            <Menu
                isMenuShow={isMenuShow}
                setIsMenuShow={setIsMenuShow}
            />
            <div className='mt-16'>
                {children}
            </div>
        </>
    );
};

export default Content;