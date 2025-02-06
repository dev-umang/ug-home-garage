export type Check = {
  description: string;
  resolved?: boolean;
};

export type Bill = {
  description: string;
  qty: number;
  unit: "liter" | "piece";
  rate: number;
  total: number; // Rate * Qty
};

export type Service = {
  kms: number;
  servicedAt: string;
  problems: Check[];
  billDetails?: Bill[];
  billImage?: string;
  oilChanged?: boolean;
  changedParts?: string[];
};

export type ExternalParts = {
  id: string;
  name: string;
  purchasedAt: string;
  description: string;
};

export type Vehicle = {
  id: string;
  model: string;
  brand: Brand;
  image?: string;
  nickName?: string;
  services?: Service[];
  checklist?: Check[];
  onRoadPrice?: number;
  boughtOn?: string;
};

export type Brand = {
  name: string;
  logo: string;
};

export type Garage = {
  id: string;
  name: string;
  address?: string;
  vehicles?: Vehicle[];
  color?: string;
};
