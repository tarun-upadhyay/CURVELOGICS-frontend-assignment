import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { clientData, servicesData } from "../Utils/staticData";
const initState = {
  data: JSON.parse(localStorage.getItem("services")) || servicesData,
  clients: JSON.parse(localStorage.getItem("clients")) || clientData,
};

export const ServiceContext = createContext();
export const ServiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ServiceContext.Provider value={{ state, dispatch }}>
      {children}
    </ServiceContext.Provider>
  );
};
