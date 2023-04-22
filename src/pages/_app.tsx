import "../styles/global.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Penne Wedding</title>
      </Head>
      <div className="flex w-full max-sm:px-0">
        {/* <Header /> */}
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}
