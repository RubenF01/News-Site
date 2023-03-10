import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Lato } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import CountryContext from "@/context/countryCountext";
import { useState, useMemo } from "react";
import { countries } from "@/utils";

const lato = Lato({ subsets: ["latin"], weight: ["700", "400", "300", "100"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [country, setCountry] = useState(countries[3]);

  const value = useMemo(() => ({ country, setCountry }), [country]);

  return (
    <CountryContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <main className={lato.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </QueryClientProvider>
    </CountryContext.Provider>
  );
}
