import { motion } from "framer-motion";
import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import WhyBanner from "./WhyBanner";

const WhyUs = () => {
  const WhyChooseData = [
    {
      id: 1,
      title: "One-on-one Teaching",
      desc: "All of our special education experts have a degree in special education.",
      icon: <GrYoga />,
      bgColor: "#0063ff",
      delay: 0.3,
    },
    {
      id: 2,
      title: "24/7 Tutor Availability",
      desc: "Our tutors are always available to respond as quick as possible for you",
      link: "/",
      icon: <FaDumbbell />,
      bgColor: "#73bc00",
      delay: 0.6,
    },
    {
      id: 3,
      title: "Interactive Whiteboard",
      desc: "Our digital whiteboard equipped with audio and video chat fetures.",
      link: "/",
      icon: <GiGymBag />,
      bgColor: "#fa6400",
      delay: 0.9,
    },
    {
      id: 4,
      title: "Affordable Prices",
      desc: "Choose an expert tutor based on your budget and per hour.",
      link: "/",
      icon: <GiGymBag />,
      bgColor: "#fe6baa",
      delay: 0.9,
    },
  ];

  return (
    <div>
      <div className="container py-24">
        {/* header section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-[500px] mx-auto text-center space-y-4 mb-6"
        >
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choice Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </motion.div>
        {/* card-section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WhyChooseData.map((item, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <WhyBanner />
    </div>
  );
};

export default WhyUs;
