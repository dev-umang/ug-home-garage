import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
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
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default VehicleLayout;
