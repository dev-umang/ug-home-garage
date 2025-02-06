import { useCallback } from "react";
import { useAtom } from "jotai";
import { Garages } from "@common/data";
import { AtomSelectedVehicle } from "..";

const useVehicle = () => {
  const [vehicle, setVehicle] = useAtom(AtomSelectedVehicle);

  const getVehicle = useCallback((garageId?: string, vehicleId?: string) => {
    const _vehicle = Garages.find((g) => g.id === garageId)?.vehicles?.find(
      (v) => v.id === vehicleId,
    );
    setVehicle(_vehicle ?? null);
  }, []);

  return { vehicle, getVehicle };
};

export default useVehicle;
