import React, { useRef } from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHelpBuoySharp } from "react-icons/io5";
import bgImg from "../../assets/images/contact.jpg";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[600px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-zinc-500 to-zinc-700 opacity-40"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div
            className="max-w-7xl mx-auto p-4 mb-3 z-10"
            id="contact"
            ref={contactRef}
          >
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 md:mt-16 mb-3 text-center text-white">
              Bog'lanish
            </h2>
            <p className="text-center text-slate-200 xl:text-lg max-w-lg xl:max-w-xl mx-auto">
              Biz taxminlarni sinab ko'rish va tinglovchilaringizning
              ehtiyojlari bilan erta va tez-tez bog'lanish uchun tezkor
              yondashuvdan foydalanamiz.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="relative top-[200px] md:top-[300px] flex flex-col gap-3 md:gap-8 max-w-[350px] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto p-4 md:p-6 xl:px-10 xl:py-8 rounded-md bg-white z-20 border border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center gap-3 md:gap-8 md:flex-row">
            <label className="flex flex-col">
              Ism
              <input
                type="text"
                className="input input-bordered w-full bg-slate-50"
                placeholder="Nodirbek"
              />
            </label>
            <label className="flex flex-col">
              Familiya
              <input
                type="text"
                className="input input-bordered w-full bg-slate-50"
                placeholder="Nurmamatov"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center gap-3 md:gap-8 md:flex-row">
            <label className="flex flex-col">
              Email
              <input
                type="text"
                className="input input-bordered w-full bg-slate-50"
                placeholder="name@gmail.com"
              />
            </label>
            <label className="flex flex-col">
              Telefon
              <input
                type="text"
                className="input input-bordered w-full bg-slate-50"
                placeholder="+998 90 123 45 67"
              />
            </label>
          </div>
          <label className="flex flex-col">
            Xabar
            <textarea
              type="text"
              className="textarea textarea-bordered w-full min-h-[150px] bg-slate-50"
              placeholder="Xabar qoldirish ..."
            />
          </label>
          <div className="">
            <button className="p-2 border-2 border-gray-800 w-full rounded text-gray-800 hover:bg-gray-800 hover:text-white hover:border-slate-400 transition-colors duration-300">
              Xabarni yuborish
            </button>
          </div>
        </form>
      </section>

      {/* Second section */}
      <section className="max-w-7xl mx-auto p-4 mt-80 md:mt-52 xl:mt-60 flex flex-col items-center justify-between md:flex-row mb-5">
        <div className="flex flex-col items-center mb-3">
          <div className="border w-12 h-12 bg-slate-50 rounded mb-2 flex justify-center items-center">
            <IoMdMailUnread className="w-[20px] h-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-center mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          </p>
          <a href="mailto:sop@example.com" className="text-blue-500">
            sop@example.com
          </a>
        </div>
        <div className="flex flex-col items-center mb-3">
          <div className="border w-12 h-12 bg-slate-50 rounded mb-2 flex justify-center items-center">
            <FaPhoneAlt className="w-[20px] h-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Telefon</h3>
          <p className="text-center mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          </p>
          <a href="tel:+998901234567" className="text-blue-500">
            +998 90 123 45 67
          </a>
        </div>
        <div className="flex flex-col items-center mb-3">
          <div className="border w-12 h-12 bg-slate-50 rounded mb-2 flex justify-center items-center">
            <IoHelpBuoySharp className="w-[20px] h-auto" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Yordam</h3>
          <p className="text-center mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <a href="/" className="text-blue-500">
            Yordam markazi
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
