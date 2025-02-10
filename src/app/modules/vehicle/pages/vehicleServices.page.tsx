import { FC, useState } from "react";
import { Page } from "@components/shared";
import { Button } from "@components/ui";
import AddServiceSheet from "../components/sevices/addServiceSheet/addService.sheet";
import useVehicle from "../hooks/useVehicle";

const VehicleServicesPage: FC = () => {
  const { vehicle } = useVehicle();
  const [open, setOpen] = useState(false);

  return (
    <Page title="Services">
      {vehicle?.services?.map((s, i) => <div key={i}></div>)}
      <Button.Floating
        onClick={() => setOpen(true)}
        // href={`/vehicle/${vehicle?.garage?.id}/${vehicle?.id}/services?action=add`}
      />
      <AddServiceSheet {...{ open, setOpen }} />
    </Page>
  );
};

export default VehicleServicesPage;
