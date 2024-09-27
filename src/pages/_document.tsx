import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Explore the projects and skills of Mayur Dayal, a Frontend-focused Software Engineer with Backend capabilities (APIs, Auth) and DevOps expertise (CI/CD, Containerization, Orchestration). Specializing in Next.js, React, and modern JavaScript, discover innovative solutions and creative designs that span the full stack."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
