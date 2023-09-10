import { useContext } from "react";
import { create, useStore as useZustandStore } from "zustand";
import { persist } from "zustand/middleware";
import { createAppSlice } from "./slices/app";
import { State } from "./slices/state";
import { zustandContext } from "./store-provider";

export function useStore<T>(selector: (state: State) => T) {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Store is missing the provider");

  return useZustandStore(store, selector);
}

export const initializeStore = (preloadedState: Partial<State>) =>
  create<State>()(
    persist(
      (...api) => ({
        ...createAppSlice(...api),
        /**
         * Register new slices here
         */
        // ...createOtherSlice(...api)
        ...preloadedState,
      }),
      {
        name: "zustand-store",
        partialize: (state) => ({
          /**
           * Include the keys you want to persist in here.
           */
          // bears: state.bears
        }),
      }
    )
  );
