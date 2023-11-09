import React from "react";
import MainBanner from "./MainBanner";
//import Features from "./components/Features";
import WhyUs from "./WhyUs";
import ComingSoon from "./ComingSoon";
import Courses from "./Courses";
import Video from "./Video";
import Contact from "./Contact";

const Home = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <WhyUs />
      <ComingSoon />
      <Courses />
      <Video />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
