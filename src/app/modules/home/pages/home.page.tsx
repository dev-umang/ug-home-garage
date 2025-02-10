import { FC } from "react";
import { Garages } from "@common/data";
import { AppHeader } from "@components/shared";
import GarageList from "../components/garageList/garage.list";

const HomePage: FC = () => (
  <div>
    <AppHeader />
    <div className="max-w-[100%] md:max-w-[60%] m-auto">
      <GarageList garages={Garages} />
    </div>
  </div>
);

export default HomePage;
