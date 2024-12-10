import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen && (
        <div className="bg-primary hidden lg:block text-center  ">
          Are you a university or school student for an online tutoring
          partnership?
          <a href="#" className="text-secondary ml-5">
            Talk to us
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className=" cursor-pointer font-bold hover:text-red-700 ml-20"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default NavbarBanner;
