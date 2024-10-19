import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HomeGallery = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 mb-3">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3">
          Gallareya
        </h2>
        <div className="mb-4">
          <div className="">
            <div className="-m-1 flex flex-wrap md:-m-2">
              <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            to="/gallery"
            className="flex items-center xl:text-lg font-semibold text-gray-400 hover:text-gray-800 transition-colors duration-300"
          >
            Barcha rasmlar <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
