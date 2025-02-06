import useVehicle from "./hooks/useVehicle";
import VehicleInfoPage from "./pages/vehicleInfo.page";
import VehicleServicesPage from "./pages/vehicleServices.page";
import { AtomSelectedVehicle } from "./store/vehicle.store";
import { Vehicle } from "./types/vehicle.type";

export {
  VehicleInfoPage,
  VehicleServicesPage,
  useVehicle,
  AtomSelectedVehicle,
  type Vehicle,
};
