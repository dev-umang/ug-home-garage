import { useCallback, useState } from "react";
import { Garages } from "@common/data";
import { Vehicle } from "@common/types";

const useVehicle = () => {
  const [vehicle, setVehicle] = useState<Vehicle | undefined | null>(undefined);

  const getVehicle = useCallback((garageId?: string, vehicleId?: string) => {
    const _vehicle = Garages.find((g) => g.id === garageId)?.vehicles?.find(
      (v) => v.id === vehicleId,
    );
    setVehicle(_vehicle ?? null);
  }, []);

  return { vehicle, getVehicle };
};

export default useVehicle;
