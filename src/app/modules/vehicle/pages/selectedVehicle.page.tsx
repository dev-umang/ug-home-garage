import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVehicle } from "..";

const SelectedVehiclePage: FC = () => {
  const { getVehicle, vehicle } = useVehicle();
  const { garageId, vehicleId } = useParams();

  useEffect(() => {
    getVehicle(garageId, vehicleId);
  }, [getVehicle, garageId, vehicleId]);

  return <div>SelectedVehiclePage {vehicle?.nickName}</div>;
};

export default SelectedVehiclePage;
