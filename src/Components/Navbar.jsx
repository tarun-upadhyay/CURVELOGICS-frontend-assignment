import React, { useEffect, useState } from "react";
import HomepageNav from "../Pages/Homepage/HomepageNav";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (location.pathname !== "/") {
      setIsSticky(true);
    }
    if (location.pathname === "/") {
      setIsSticky(false);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  return (
    <div
      className={`${
        isSticky ? "fixed w-full top-0 bg-white shadow-lg z-10" : "hidden"
      } `}
    >
      <HomepageNav />
    </div>
  );
};

export default Navbar;
