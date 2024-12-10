import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import NumbersCount from "./components/numbersCount/NumbersCount";
import WhyUs from "./components/whyChoiceUs/WhyUs";
import SubjectCard from "./components/subjectCard/SubjectCard";
import Testimonial from "./components/TestimonialsData/TestimonialsData";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <NumbersCount />
      <WhyUs />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
