import { createContext, useRef, type PropsWithChildren } from "react";
import { initializeStore } from "./store";

export type StoreType = ReturnType<typeof initializeStore>;

export const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(props);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
