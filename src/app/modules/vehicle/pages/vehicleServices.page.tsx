import { FC } from "react";
import { Page } from "@components/shared";
import { Button } from "@components/ui";
import useVehicle from "../hooks/useVehicle";

const VehicleServicesPage: FC = () => {
  const { vehicle } = useVehicle();

  return (
    <Page title="Services">
      {vehicle?.services?.map((s, i) => <div key={i}></div>)}
      <Button.Floating href="/vehicle/:garageId/:vehicleId/services/open?action=add" />
    </Page>
  );
};

export default VehicleServicesPage;
