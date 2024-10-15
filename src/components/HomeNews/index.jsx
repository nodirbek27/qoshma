import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HomeNews = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 mb-3">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3">
          Yangiliklar
        </h2>
        <div className="mb-4"></div>
        <div className="flex justify-end">
          <Link
            to="/news"
            className="flex items-center xl:text-lg font-semibold text-gray-400 hover:text-gray-800 transition-colors duration-300"
          >
            Barcha yangiliklar <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
