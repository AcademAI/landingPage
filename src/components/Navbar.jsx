import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, langswitch, menu, close } from "../assets";

import { LanguageContext } from "../LanguageContext";

const Navbar = () => {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle("bg-primary");
      } else {
        setNavbarStyle("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
    handleLanguageChange();
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 ${navbarStyle}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-black text-[18px] font-bold cursor-pointer flex">
            {language === "RU" ? "АкадемИИя" : "AcademYA"}&nbsp;
            <span className="sm:block hidden">
              |&nbsp;
              {language === "RU"
                ? "Разработка & курсы"
                : "Development & courses"}
            </span>
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title[language === "RU" ? 0 : 1]
                  ? "text-black"
                  : "text-secondary"
              } hover:text-black text-[18px]
                  font-medium cursor-pointer`}
              onClick={() => setActive(link.title[language === "RU" ? 0 : 1])}
            >
              <a href={`#${link.id}`}>
                {link.title[language === "RU" ? 0 : 1]}
              </a>
            </li>
          ))}
          <div className="h-auto border-r border-black-100"></div>
          <div
            className={` flex items-center ${clicked ? "clicked" : ""}`}
            onClick={handleClick}
          >
            <img
              src={langswitch}
              alt=""
              className="w-[36px] h-[36px] object-contain cursor-pointer"
            />
          </div>
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center p-6">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 menu-gradient absolute top-20 
            right-0 mx-4 my-2 min-w-[140px] 
            z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title[language === "RU" ? 0 : 1]
                      ? "text-black"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title[language === "RU" ? 0 : 1]);
                  }}
                >
                  <a href={`#${link.id}`}>
                    {link.title[language === "RU" ? 0 : 1]}
                  </a>
                </li>
              ))}
              <hr className="my-1 border-black-100 w-full"></hr>
              <div
                className={` flex items-center ${clicked ? "clicked" : ""}`}
                onClick={handleClick}
              >
                <img
                  src={langswitch}
                  alt=""
                  className="w-[36px] h-[36px] object-contain cursor-pointer"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
