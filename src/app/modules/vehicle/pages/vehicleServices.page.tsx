import { FC } from "react";
import { Page } from "@components/shared";
import useVehicle from "../hooks/useVehicle";

const VehicleServicesPage: FC = () => {
  const { vehicle } = useVehicle();

  return (
    <Page title="Services">
      {vehicle?.services?.map((s, i) => <div key={i}></div>)}
    </Page>
  );
};

export default VehicleServicesPage;
