import { StateCreator } from "zustand";
import { AppSlice } from "./app";
// import { OtherSlice } from "./other";

export type State = AppSlice /* & OtherSlice */;

export type StateSlice<T> = StateCreator<
  State,
  [],
  [["zustand/persist", Partial<T>]],
  T
>;
