import React, { ReactNode, useState } from 'react';
import useAppSelector from '../../../../helpers/useAppSelector';
import Header from './Header';
import Menu from './Menu';
import Sidebar from './Sidebar';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {
    const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);
    const isLogin: boolean = useAppSelector('common.isLogin');

    return (
        <>
            {
                isLogin &&
                <Menu />
            }
            <Header
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
                isLogin={isLogin}
            />
            <Sidebar
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
            />
            <div className="my-16">
                {children}
            </div>
        </>
    );
};

export default Content;