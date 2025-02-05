export type Vehicle = {
  id: string;
  model: string;
  brand: string;
  nickName?: string;
};

export type Brand = {
  name: string;
  logo: string;
  vehicleType: "bike" | "car";
};
