import Aside from "./components/Aside";
import Content from "./components/Content";
import { getProfile } from "../common/apis";
import { useEffect } from "react";

const Dashboard = () => {

    useEffect(() => {
        getProfile();
    }, [])

    return (
      <>
        <Aside />
        <Content />
      </>
    );
};

export default Dashboard;