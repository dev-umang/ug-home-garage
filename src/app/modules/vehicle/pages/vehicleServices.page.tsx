import { FC } from "react";
import useVehicle from "../hooks/useVehicle";

const VehicleServicesPage: FC = () => {
  const { vehicle } = useVehicle();

  return (
    <div>{vehicle?.services?.map((s, i) => <div key={i}>{s.kms}</div>)}</div>
  );
};

export default VehicleServicesPage;
