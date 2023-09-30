import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const FoxContext = createContext();

export const FoxProvider = ({ children }) => {
  const [url, isloading] = useFetch(5);

  return (
    <FoxContext.Provider value={{ url, isloading }}>
      {children}
    </FoxContext.Provider>
  );
};

export const useFoxContext = () => {
  return useContext(FoxContext);
};
