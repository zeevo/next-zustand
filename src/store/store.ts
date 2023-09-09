import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAppSlice } from "./slices/app";
import { State } from "./slices/state";

export const useStore = create<State>()(
  persist(
    (...api) => ({
      ...createAppSlice(...api),
      // ...createOtherSlice(...api)
    }),
    {
      name: "zustand-store",
      partialize: (state) => ({
        // Include the keys you want to persist in here.
        // bar: {
        //   baz: state.bar.baz,
        // },
      }),
    }
  )
);
