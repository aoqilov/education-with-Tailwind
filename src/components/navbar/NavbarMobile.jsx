import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { AnimatePresence, motion } from "framer-motion";

const NavbarMobile = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-yellow-400 mx-6 rounded-3xl"
        >
          <ul className="text-center ">
            {NavbarMenu.map((item, id) => {
              return (
                <li
                  key={item.id}
                  className="my-3 hover:translate-x-3 transition-all"
                >
                  <a
                    className="font-semibold text-gray-600 text-sm  hover:text-white transition-all duration-100 "
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
