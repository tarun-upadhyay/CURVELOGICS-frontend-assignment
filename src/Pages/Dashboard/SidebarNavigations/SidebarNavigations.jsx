import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuActivity } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
const links = [
  { name: "Home", to: "/dashboard", icon: FaHome },
  { name: "Services", to: "/dashboard/services", icon: RiCustomerService2Fill },
  { name: "Activity", to: "/dashboard/activity", icon: LuActivity },
  { name: "Clients", to: "/dashboard/clients", icon: MdPeopleAlt },
  { name: "Billing", to: "/dashboard/billing", icon: FaMoneyBills },
  { name: "Settings", to: "/dashboard/settings", icon: IoSettings },
];
const SidebarNavigations = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        to={"/dashboard"}
      >
        <div className="w-32 text-white md:w-40">
          <h3 className="text-xl font-extrabold">Dashboard</h3>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              to={link.to}
              className={clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-xl font-semibold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.to,
                }
              )}
            >
              <LinkIcon className="w-8 h-5" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavigations;
