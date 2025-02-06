import { atom } from "jotai";
import { Vehicle } from "..";

export const AtomSelectedVehicle = atom<Vehicle | undefined | null>();
