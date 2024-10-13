import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const trackClicks = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // check for anchor tags
    const anchor = target.closest("a");
    if (anchor instanceof HTMLAnchorElement) {
      const href = anchor.getAttribute("href");
      const linkText = anchor.textContent || "Non text link";
      sendGAEvent({
        event_name: "Link clicked",
        destination: href,
        linkText,
      });
      return;
    }

    // check for button tags
    const btn = target.closest("button");
    if (btn instanceof HTMLButtonElement) {
      const btnText = btn.textContent || "Non text button";
      const btnAct = btn.type || "button";
      sendGAEvent({
        event_name: "Button clicked",
        btnText,
        btnAct,
      });
      return;
    }
  };

  useEffect(() => {
    document.addEventListener("click", trackClicks);

    return () => document.removeEventListener("click", trackClicks);
  }, []);

  return (
    <>
      <Head>
        <title>Mayur Dayal | Frontend-focused SDE Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
      <GoogleAnalytics gaId="G-SWHGYF2EXV" />
    </>
  );
}
