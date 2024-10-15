import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 mb-3" id="contact" ref={contactRef}>
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3">
          Bog'lanish
        </h2>
      </div>
    </div>
  );
};

export default Contact;
