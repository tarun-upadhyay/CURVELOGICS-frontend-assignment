import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ServiceContextProvider } from "./ServiceContext/ServiceContextProvider";
import { clientData, servicesData } from "./Utils/staticData";

const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem("services", JSON.stringify(servicesData));
localStorage.setItem("clients", JSON.stringify(clientData));
root.render(
  <ServiceContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceContextProvider>
);
