import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";
import NavbarMobile from "./NavbarMobile";
import NavbarBanner from "./NavbarBanner";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        {/* logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="container flex justify-between items-center py-6"
        >
          <div className="text-2xl flex items-center font-bold gap-2">
            <MdComputer className="text-secondary text-3xl " />
            <p>E-Tutor</p>
          </div>
          {/* menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              {NavbarMenu.map((item, id) => {
                return (
                  <li key={item.id}>
                    <a
                      className="font-semibold text-gray-600 text-sm  xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* login/sign */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign In</button>
            <button className="font-semibold text-white bg-secondary px-4 py-2 rounded-full gap-4">
              {" "}
              Register
            </button>
          </div>
          {/* hamburger */}
          <div>
            <MdMenu
              className="text-3xl hover:cursor-pointer lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </motion.div>
      </nav>
      <NavbarMobile isOpen={isOpen} />
      <NavbarBanner />
    </>
  );
};

export default Navbar;
