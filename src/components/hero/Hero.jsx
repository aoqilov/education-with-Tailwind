import React from "react";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import HeroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* brand info  */}
        <div className="flex flex-col justify-center  py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left  space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-orange-600 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-semibold lg:text-6xl"
            >
              Find Your Perfect <span className="text-primary">Tutor</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btns-hero flex gap-6 items-center"
            >
              <button className="primary-btn">get started</button>
              <button className="flex items-center gap-4 play-btn">
                <FaPlay className="h-10 w-10 p-2 rounded-full bg-[#D9E8FF] text-secondary" />
                see how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* hero img */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            src={HeroImage}
            alt="das"
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
