import { tr } from "framer-motion/client";
import React from "react";
import CountUp from "react-countup";

const NumbersCount = () => {
  return (
    <div className="bg-secondary py-8">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center text-white ">
          <p className="font-semibold text-3xl">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Expert tutors</p>
        </div>
        <div className="text-center text-white ">
          <p className="font-semibold text-3xl">
            +
            <CountUp
              start={0}
              end={20000}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Hours content</p>
        </div>
        <div className="text-center text-white ">
          <p className="font-semibold text-3xl">
            <CountUp
              start={0}
              end={278}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Subject and courses</p>
        </div>
        <div className="text-center text-white ">
          <p className="font-semibold text-3xl">
            <CountUp
              start={0}
              end={72287}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Active students</p>
        </div>
      </div>
    </div>
  );
};

export default NumbersCount;
