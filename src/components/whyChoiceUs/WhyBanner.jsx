import React from "react";
import Ben1 from "../../assets/banner1.png";
import Ben2 from "../../assets/banner2.png";
const WhyBanner = () => {
  return (
    <div className="container grid gap-10">
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-10 space-y-6 md:space-y-0 mb-15">
        <div>
          <img className="w-400px h-full object-cover" src={Ben1} alt="ben" />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left lg:max-w-[500px]  space-y-4">
          <h3 className="text-sm text-orange-600 font-semibold capitalize">
            CUSTOMIZE WITH YOUR SCHEDULE
          </h3>
          <h5 className="text-xl lg:text-2xl font-semibold capitalize">
            Personalized Professional Online Tutor on Your Schedule
          </h5>
          <p className="text-sm text-slate-500">
            Our scheduling system allows you to select based on your free time.
            Lorem ipsum demo text for template. Keep track of your students
            class and tutoring schedules, and never miss your lectures. The best
            online class scheduling system with easy accessibility.Lorem ipsum
            is a placeholder text commonly used to demonstrate the visual form
          </p>
          <button className="primary-btn">get started</button>
        </div>
      </div>
      <div className="card grid grid-rows-reverse grid-cols-1 md:grid-cols-2 gap-10 space-y-6 md:space-y-0 mb-5 ">
        <div className="md:order-1">
          <img className="w-400px h-full object-cover" src={Ben2} alt="ben" />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left lg:max-w-[500px]  space-y-4">
          <h3 className="text-sm text-orange-600 font-semibold capitalize">
            CUSTOMIZE WITH YOUR SCHEDULE
          </h3>
          <h5 className="text-xl lg:text-2xl font-semibold capitalize">
            Personalized Professional Online Tutor on Your Schedule
          </h5>
          <p className="text-sm text-slate-500">
            Our scheduling system allows you to select based on your free time.
            Lorem ipsum demo text for template. Keep track of your students
            class and tutoring schedules, and never miss your lectures. The best
            online class scheduling system with easy accessibility.Lorem ipsum
            is a placeholder text commonly used to demonstrate the visual form
          </p>
          <button className="primary-btn">get started</button>
        </div>
      </div>
    </div>
  );
};

export default WhyBanner;
