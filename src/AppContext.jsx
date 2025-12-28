import { createContext } from "react";
import useFetch from "./useFetch";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data: photos, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=80"
  );

  return (
    <AppContext.Provider value={{ photos: photos || [], loading, error }}>
      {children}
    </AppContext.Provider>
  );
};