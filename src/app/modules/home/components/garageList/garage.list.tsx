import { FC } from "react";
import { Garage } from "@common/types";
import VehicleList from "../vehicleList/vehicle.list";

type Props = {
  garages: Garage[];
};

const GarageList: FC<Props> = ({ garages }) => (
  <div>
    {garages.map((garage) => (
      <div key={garage.id}>
        <div className="flex justify-between mb-4">
          <div className="border-b-[3px] border-sky-500 px-0.5">
            <h3 className="text-xl font-semibold">{garage.name}</h3>
          </div>
          <span className="text-slate-400/70">View</span>
        </div>
        <VehicleList vehicle={garage.vehicles} garage={garage} />
      </div>
    ))}
  </div>
);

export default GarageList;
