import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { VehicleHeader } from "@components/shared";
import { useVehicle } from "@modules/vehicle";
import BottomNav from "./components/bottom.nav";

const VehicleLayout: FC = () => {
  const { getVehicle } = useVehicle();
  const { garageId, vehicleId } = useParams();

  useEffect(
    () => getVehicle(garageId, vehicleId),
    [getVehicle, garageId, vehicleId],
  );

  return (
    <div>
      <VehicleHeader />
      <div className="max-w-[100%] md:max-w-[60%] m-auto py-2">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
};

export default VehicleLayout;
