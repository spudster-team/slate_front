import React from "react";
import MainBanner from "./MainBanner";
//import Features from "./components/Features";
import WhyUs from "./WhyUs";
import Video from "./Video";
import Contact from "./Contact";

const Home = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <WhyUs />
      <Video />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
