import { FC } from "react";
import { useVehicle } from "..";

const VehicleInfoPage: FC = () => {
  const { vehicle } = useVehicle();

  return <div>SelectedVehiclePage {vehicle?.nickName}</div>;
};

export default VehicleInfoPage;
