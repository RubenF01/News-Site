import { createContext } from "react";

const CountryContext = createContext({
  country: "do",
  setCountry: (country: string) => {},
});

export default CountryContext;
