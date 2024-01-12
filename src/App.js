import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/AboutUs/About";

import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SidebarNavigations from "./Pages/Dashboard/SidebarNavigations/SidebarNavigations";
import Service from "./Pages/Dashboard/Service/Service";
import ContactUs from "./Pages/Contact/ConatctUs";
import Activity from "./Pages/Dashboard/Activity/Activity";
import Client from "./Pages/Dashboard/Clients/Client";
import Billing from "./Pages/Dashboard/Billing/Billing";
import Setting from "./Pages/Dashboard/Settings/Setting";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          element={
            <div className="flex flex-col md:flex-row mt-20 gap-4">
              {" "}
              <SidebarNavigations />
              <Outlet />{" "}
            </div>
          }
        >
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/services" element={<Service />}></Route>
          <Route path="/dashboard/activity" element={<Activity />}></Route>
          <Route path="/dashboard/clients" element={<Client />}></Route>
          <Route path="/dashboard/billing" element={<Billing />}></Route>
          <Route path="/dashboard/settings" element={<Setting />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
