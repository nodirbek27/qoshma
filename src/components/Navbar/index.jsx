import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navbar } from "../../utils/navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const bgColor = "bg-gray-800";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  const navigate = useNavigate();
//   const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {!isMobile ? (
        // Laptop Navbar Code Here
        <nav className={`h-[64px] ${bgColor}`}>
          <div className="flex justify-between mx-auto items-center py-4 px-24">
            <div className="text-white font-bold text-xl">Logo</div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navbar.map(
                (item) =>
                  !item.hidden && (
                    <li key={item.id} className="text-white text-sm md:text-lg">
                      {item.title}
                    </li>
                  )
              )}
            </ul>
            <button className="px-5 py-1 text-white border-2" onClick={onLogin}>
              Kirish
            </button>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav className={`h-[64px] ${bgColor} py-4 px-4`}>
          <div className="mx-auto flex justify-between items-center ">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="relative flex justify-end items-center gap-6 text-white cursor-pointer">
              <FaTimes onClick={null} className="text-white cursor-pointer" />
              <ul className="absolute top-5 right-5 px-5 py-3 border rounded-md backdrop-blur-xl gap-8 md:gap-16 cursor-pointer">
              {navbar.map(
                (item) =>
                    <li key={item.id} className="text-[#444] text-md font-semibold">
                      {item.title}
                    </li>
              )}
            </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
