import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import controlImg from "../../assets/images/control.png";
import logo from "../../assets/images/logo.png";
import analitikaImg from "../../assets/images/Chart.png";
import talabaImg from "../../assets/images/graduate.png";
import Exit from "../../assets/icons/exit.svg";

const ProfileNavbar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = [
    { title: "Shaxsiy ma'lumotlar", src: talabaImg, link: "/profile/info" },
    { title: "Arizalar", src: analitikaImg, link: "/profile/arizalar" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt="icon"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="icon"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Qo'qon davlat <br /> Pedagogika instituti
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <Link
                to={Menu.link}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
                  ${location.pathname === Menu.link ? "bg-light-white" : ""}`}
              >
                <img src={Menu.src} alt="icon" width={24} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
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
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              CHIQISH
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="navbar bg-base-300 p-7">
          <div className="navbar-end">
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
          </div>
        </div>
        <div className="h-screen flex-1 p-7 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
