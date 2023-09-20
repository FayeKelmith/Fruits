import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const FoxContext = createContext();

export const FoxProvider = ({ children }) => {
  const [url, isloading] = useFetch();

  //TODO: to set theme later
  //   const [theme, setTheme] = useState("dark");

  return (
    <FoxContext.Provider value={{ url, isloading }}>
      {children}
    </FoxContext.Provider>
  );
};

export const useFoxContext = () => {
  return useContext(FoxContext);
};
