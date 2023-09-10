import StoreProvider from "@/store/store-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps.state}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
