import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Lato } from "@next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700", "400", "300", "100"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
