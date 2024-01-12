import React from "react";
import { NavigatinLinks } from "../../Utils/NavigationLinks";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const HomepageNav = () => {
  return (
    <div className="mx-auto w-[95%] md:w-[80%]">
      <nav className="flex justify-between my-5">
        <div>
          <h3 className="text-xl font-bold">
            <Link to={"/"}>CURVELOGICS</Link>
          </h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex">
            {NavigatinLinks.map(({ to, title }, i) => {
              return (
                <li
                  key={i}
                  className="inline-block mx-5 leading-7 text-[1rem] hover:opacity-50 cursor-pointer font-semibold"
                >
                  <Link to={to}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="hidden md:flex py-3 px-4 bg-[#edf2f6] rounded-full leading-4 text-sm gap-2 items-center justify-center hover:bg-black hover:text-[#ffffff] transition-colors duration-500">
          Night Mode <FaArrowRight />
        </button>
        <div className="block md:hidden mr-5">
          <GiHamburgerMenu className="text-3xl" />
        </div>
      </nav>
    </div>
  );
};

export default HomepageNav;
