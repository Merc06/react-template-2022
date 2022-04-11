import React, { ReactNode } from 'react';
import Header from './Header';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {

    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    );
};

export default Content;