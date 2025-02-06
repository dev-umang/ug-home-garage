import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./components/main.header";

const MainLayout: FC = () => (
  <div>
    <MainHeader />
    <div className="max-w-[60%] m-auto py-4">
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
