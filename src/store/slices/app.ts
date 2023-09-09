import { StateSlice } from "./state";

export interface AppSlice {
  bears: number;
  addApp: () => void;
}

export const createAppSlice: StateSlice<AppSlice> = (set) => ({
  bears: 0,
  addApp: () => set((state) => ({ bears: state.bears + 1 })),
});
