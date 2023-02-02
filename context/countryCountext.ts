import { createContext } from "react";

const CountryContext = createContext({
  country: { label: "Dominican Republic", value: "do" },
  setCountry: (country: { label: string; value: string }) => {},
});

export default CountryContext;
