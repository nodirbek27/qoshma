import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Language selector
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import languages from "../../utils/languages";
// js-cookie
import Cookies from "js-cookie";

// Images and icons
import logo from "../../assets/images/logo.png";
import analitikaImg from "../../assets/images/Chart.png";
import talabaImg from "../../assets/images/graduate.png";
import chatImg from "../../assets/images/chat.png";
import closeImg from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import Exit from "../../assets/icons/exit.svg";
import GlobeIcon from "../../assets/icons/globe.svg";

const ProfileNavbar = () => {
  // i18next
  const currentLanguageCode = Cookies.get("i18next") || "uz";
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: "Shaxsiy ma'lumotlar", src: talabaImg, link: "/profile/info" },
    { title: "Arizalar", src: analitikaImg, link: "/profile/arizalar" },
    { title: "Xabarlar", src: chatImg, link: "/profile/chat" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72 p-5" : "w-0"
        } bg-white h-screen md:p-5 pt-8 absolute md:relative md:w-72 duration-300 z-10`}
      >
        <img
          src={closeImg}
          className={`absolute cursor-pointer right-3 top-5 w-7 ${
            !open && "rotate-180"
          } md:hidden`}
          onClick={() => setOpen(!open)}
          alt="icon"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 w-8 ${
              open && "rotate-[360deg]"
            }`}
            alt="icon"
          />
          <h1
            className={`text-[#222] origin-left font-semibold text-lg duration-200 whitespace-nowrap ${
              !open && "scale-0"
            } md:scale-100`}
          >
            {t("full_name_Institut")}
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <Link
                to={Menu.link}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-dark-purple transition-colors duration-300 text-gray-300 text-sm items-center gap-x-4
                  ${(location.pathname === Menu.link && open) ? "bg-dark-purple" : ""}`}
              >
                <img src={Menu.src} alt="icon" width={24} />
                <span
                  className={`${!open && "hidden"} md:block origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute left-5 bottom-2">
          <Link
            to="/login"
            className="flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4"
          >
            <img src={Exit} alt="icon" width={24} />
            <span className={`${!open && "hidden"} md:block origin-left duration-200`}>
              CHIQISH
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between md:justify-end items-center bg-white px-4 py-2">
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <img src={menu} alt="icon" width={24} />
          </button>
          <div className="">
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost">
                <img src={GlobeIcon} alt="globe" width={20} />
                <span className={`fi fi-${currentLanguageCode}`}></span>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {languages.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button
                      onClick={() => i18next.changeLanguage(code)}
                      disabled={code === currentLanguageCode}
                      className={`${
                        code === currentLanguageCode ? "font-bold" : ""
                      }`}
                    >
                      <span className={`fi fi-${country_code}`}></span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-screen flex-1 p-2 md:p-4 overflow-y-scroll bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
