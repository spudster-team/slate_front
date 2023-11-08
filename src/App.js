import './App.css';
import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import ComingSoon from './components/ComingSoon';
import Courses from './components/Courses';
import Video from './components/Video';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MainBanner/>
      <Features/>
      <WhyUs/>
      <ComingSoon/>
      <Courses/>
      <Video/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
