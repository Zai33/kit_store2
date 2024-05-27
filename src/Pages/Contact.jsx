import React from "react";
import ContactUs from "../Components/ContactUs";
import ReachOut from "../Components/ReachOut";
import AboutUs from "../Components/AboutUs";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContactUs />
      <ReachOut />
      <AboutUs />
    </div>
  );
};

export default Contact;
