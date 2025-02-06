import { FC } from "react";
import { Garages } from "@common/data";
import GarageList from "../components/garageList/garage.list";

const HomePage: FC = () => (
  <div>
    <GarageList garages={Garages} />
  </div>
);

export default HomePage;
