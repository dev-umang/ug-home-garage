import { ReactNode } from "react";
import { Path } from "@configs/routes";

export type CommonType = Partial<{
  label: ReactNode;
  key: string;
  icon: ReactNode;
}>;
