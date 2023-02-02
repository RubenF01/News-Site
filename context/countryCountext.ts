import { createContext } from "react";
import { countries } from "@/utils";

const CountryContext = createContext({
  country: countries[3],
  setCountry: (country: { label: string; value: string }) => {},
});

export default CountryContext;
