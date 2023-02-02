import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Lato } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "react-query";
import CountryContext from "@/context/countryCountext";
import { useState, useMemo } from "react";

const lato = Lato({ subsets: ["latin"], weight: ["700", "400", "300", "100"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [country, setCountry] = useState({
    label: "Dominican Republic",
    value: "do",
  });

  console.log(country);

  const value = useMemo(() => ({ country, setCountry }), [country.value]);

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
