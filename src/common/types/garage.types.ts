import { Vehicle } from "@modules/vehicle";

export type Garage = {
  id: string;
  name: string;
  address?: string;
  vehicles?: Vehicle[];
  color?: string;
};
