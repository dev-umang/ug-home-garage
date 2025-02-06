import { FC } from "react";
import { RouteObject } from "react-router-dom";
import { MainLayout } from "@layouts/main";
import { VehicleLayout } from "@layouts/vehicle";
import { _404Page } from "@modules/404";
import { HomePage } from "@modules/home";
import { SplashPage } from "@modules/splash";
import { VehicleInfoPage } from "@modules/vehicle";

// List of URL paths that our application supports.
export const Paths = [
  "/",
  "/home",
  "/vehicle/:garageId/:vehicleId/showcase",
  "/vehicle/:garageId/:vehicleId/services",
  "/vehicle/:garageId/:vehicleId/parts",
  "/vehicle/:garageId/:vehicleId/docs",
  "/vehicle/:garageId/:vehicleId/checklist",
] as const;

export type Path = (typeof Paths)[number]; // Exported type of Paths for auto completion.

// Returns dynamic paths according to given parameters for specific module
export const Href = {};

// Returns a route object to map that particular
const r = (
  Component: FC,
  extra: Path | undefined | "*" | RouteObject[] = undefined,
): RouteObject => ({
  path: typeof extra === "string" ? extra : undefined,
  Component,
  children: typeof extra === "object" ? extra : undefined,
});

// Application router configuration. Path to component mapping
export const AppRoutes: RouteObject[] = [
  // r(GlobalLayout, [
  r(_404Page, "*"),
  r(SplashPage, "/"),
  r(MainLayout, [
    r(HomePage, "/home"),
    r(VehicleLayout, [
      r(VehicleInfoPage, "/vehicle/:garageId/:vehicleId/showcase"),
      r(VehicleInfoPage, "/vehicle/:garageId/:vehicleId/services"),
      r(VehicleInfoPage, "/vehicle/:garageId/:vehicleId/parts"),
      r(VehicleInfoPage, "/vehicle/:garageId/:vehicleId/docs"),
      r(VehicleInfoPage, "/vehicle/:garageId/:vehicleId/checklist"),
    ]),
  ]),
  // ]),
];
