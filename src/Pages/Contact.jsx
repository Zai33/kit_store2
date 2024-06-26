import React from "react";
import AboutUs from "../Components/customerSupport/AboutUs";
import ContactUs from "../Components/customerSupport/ContactUs";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContactUs />
      <AboutUs />
    </div>
  );
};

export default Contact;
