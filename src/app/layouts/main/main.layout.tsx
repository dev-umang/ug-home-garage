import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./components/main.header";

const MainLayout: FC = () => (
  <div>
    <MainHeader />
    <Outlet />
    </div>
);

export default MainLayout;
