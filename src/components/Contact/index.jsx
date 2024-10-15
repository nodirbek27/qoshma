import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto p-4" id="contact" ref={contactRef}>
      Contact
    </div>
  );
};

export default Contact;
