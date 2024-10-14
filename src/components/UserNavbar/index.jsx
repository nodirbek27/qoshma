import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onLogin = () => {
    navigate("/login");
  };

  const onClickBar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClick = (id) => {
    setIsActive(id);
  };

  return (
    <>
      {!isMobile ? (
        <nav
          className={`h-[64px] w-full absolute top-0 left-0 z-30 ${
            hasScrolled ? "bg-gray-800 sticky" : ""
          } transition-colors duration-300`}
        >
          <div className="flex justify-between max-w-7xl mx-auto items-center p-4">
            <div className="text-white font-bold text-xl cursor-pointer">
              <Link to="/">Logo</Link>
            </div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center">
              {navbar.map((item) =>
                !item.hidden ? (
                  <li
                    key={item.id}
                    className={`text-white text-sm md:text-lg hover:text-sky-400 cursor-pointer ${
                      isActive === item.id ? "text-sky-500" : ""
                    }`}
                    onClick={() => handleClick(item.id)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ) : null
              )}
            </ul>
            <button className="px-5 py-1 text-white border-2" onClick={onLogin}>
              Kirish
            </button>
          </div>
        </nav>
      ) : (
        <nav
          className={`h-[64px] w-full absolute top-0 p-4 z-30 ${
            hasScrolled ? "bg-gray-800 sticky" : ""
          } transition-colors duration-300`}
        >
          <div className="mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="relative flex justify-end items-center gap-6 text-white cursor-pointer">
              {isOpen ? (
                <FaTimes
                  onClick={onClickBar}
                  className="text-white cursor-pointer"
                />
              ) : (
                <FaBars
                  onClick={onClickBar}
                  className="text-white cursor-pointer"
                />
              )}
              {isOpen && (
                <ul className="absolute top-5 right-5 px-5 py-3 border rounded-md backdrop-blur-xl gap-8 md:gap-16 cursor-pointer bg-white">
                  {navbar.map((item) => (
                    <li
                      key={item.id}
                      className={`text-[#444] text-md font-semibold hover:text-sky-400 ${
                        isActive === item.id ? "text-sky-500" : ""
                      }`}
                      onClick={() => handleClick(item.id)}
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
