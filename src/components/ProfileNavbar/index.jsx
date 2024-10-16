import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer';

const bgColor = "bg-gray-800";

const ProfileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className={`h-[64px] sticky top-0 left-0 z-30 ${bgColor}`}>
        <div className="flex justify-between max-w-7xl mx-auto items-center p-4">
          <div className="text-white font-bold text-xl cursor-pointer">
            <Link to="/home">Logo</Link>
          </div>
          <div className="relative flex justify-end items-center gap-6 cursor-pointer">
            <button
              className="px-5 py-1 text-white border-2"
              onClick={() => handleClick()}
            >
              Profil
            </button>
            {isOpen && (
              <ul className="absolute top-10 right-0 p-3 border rounded-md backdrop-blur-xl gap-8 cursor-pointer bg-white">
                <li
                  className={`text-[#444] text-sm font-semibold hover:text-sky-400}`}
                  onClick={() => handleLogOut()}
                >
                  <Link to="/home">Chiqish</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="flex-grow bg-[#fff]">
        <Outlet />
      </div>
      <div className={`${bgColor}`}>
        <Footer />
      </div>
    </div>
  );
};

export default ProfileNavbar;
