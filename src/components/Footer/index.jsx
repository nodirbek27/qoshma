import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="max-w-7xl mx-auto p-4 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-4">
            <h1 className="text-lg lg:text-xl font-bold mb-4">IJEP</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis dignissimos mollitia voluptatum aut, voluptates velit
              odit omnis, rerum nobis quod.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-md lg:text-lg font-bold mb-4">Aloqa</h3>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +998 90 123 45 67
            </p>
            <p className="flex items-center gap-2">
              <IoMdMailUnread /> sop@example.com
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-md lg:text-lg font-bold mb-4">
              Ijtimoiy tarmoqlar
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="text-white text-2xl 
                            hover:text-gray-300"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-white text-2xl
                            hover:text-gray-300"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-white text-2xl
                            hover:text-gray-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-white text-2xl
                            hover:text-gray-300"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-md lg:text-lg font-bold mb-4">Manzil</h3>
            <p>Farg'ona viloyati, Qo'qon shaxri, Turon ko'chasi</p>
            <p>
              <a
                href="https://www.google.com/maps/place/Kokand+Pedagogical+Institute/@40.5300728,70.9276979,15z/data=!4m6!3m5!1s0x38baee945e333c8f:0xdbb4218e631b6996!8m2!3d40.5300728!4d70.9276979!16s%2Fg%2F1v6l5wkl?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Xaritada ko'rish
              </a>
            </p>
          </div>
        </div>
      </footer>
      {/* <!--Copyright section--> */}
      <div className="bg-gray-900 p-3 text-center text-white">
        <span className="mr-2">© 2024 Copyright: </span>
        <a
          className="font-semibold"
          href="https://.../"
        >
          QDPI IT Park
        </a>
      </div>
    </div>
  );
};

export default Footer;
