import { AppProps } from "next/app";
import Head from "next/head";
import "@elastic/eui/dist/eui_theme_light.min.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to example-orchestrator-ui!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
