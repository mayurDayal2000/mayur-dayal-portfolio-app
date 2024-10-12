import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Discover Mayur's portfolio: Frontend-focused SDE with Backend & DevOps expertise. Expert in Next.js, React, JS/TS, CI/CD & Containerization."
        />
        <meta
          name="keywords"
          content="Frontend-focused, SDE, Next.js, React, JS/TS"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
