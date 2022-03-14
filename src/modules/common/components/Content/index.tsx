import React, { ReactNode, useState } from 'react';
import useAppSelector from '../../../../helpers/useAppSelector';
import Header from './Header';
import Menu from './Menu';
import MenuList from './MenuList';
import Sidebar from './Sidebar';

interface Props {
    children: ReactNode;
}

const Content = ({ children }: Props) => {
    const [isSidebarShow, setIsSidebarShow] = useState<boolean>(false);
    const [isMenuListShow, setIsMenuListShow] = useState<boolean>(false);
    const isLogin: boolean = useAppSelector('common.isLogin');

    return (
        <>
            <MenuList
                isMenuListShow={isMenuListShow}
                setIsMenuListShow={setIsMenuListShow}
            />
            {
                isLogin &&
                <Menu
                    isMenuListShow={isMenuListShow}
                    setIsMenuListShow={setIsMenuListShow}
                />
            }
            <Header
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
                isLogin={isLogin}
                setIsMenuListShow={setIsMenuListShow}
            />
            <Sidebar
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
            />
            <div className="my-16" onClick={() => setIsMenuListShow(false)}>
                {children}
            </div>
        </>
    );
};

export default Content;