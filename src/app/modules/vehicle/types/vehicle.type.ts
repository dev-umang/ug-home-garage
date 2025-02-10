import { Garage } from "@common/types";

export type Check = {
  description: string;
  resolved?: boolean;
};

export type Doc = {
  title: string;
  images?: {
    front: string;
    back?: string;
  };
  info: Record<string, string>;
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

export type Brand = {
  name: string;
  logo: string;
};

export type Vehicle = {
  id: string;
  model: string;
  brand: Brand;
  image?: string;
  nickName?: string;
  onRoadPrice?: number;
  boughtOn?: string;
  services?: Service[];
  checklist?: Check[];
  parts?: ExternalParts[];
  docs?: Doc[];
  garage?: Garage;
};
