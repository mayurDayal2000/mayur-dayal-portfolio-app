import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mayur Dayal | Frontend-focused SDE Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
