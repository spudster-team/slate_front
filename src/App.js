import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
//import Features from "./components/Features";
import WhyUs from "./components/WhyUs";
import ComingSoon from "./components/ComingSoon";
import Courses from "./components/Courses";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import $ from 'jquery';

function App() {

  useEffect(() => {

    $('.nav li:first').addClass('active');

    $(window).scroll(function () {
      checkSection();
    });

    $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
      if($(e.target).hasClass('external')) {
        return;
      }
      e.preventDefault();
      $('#menu').removeClass('active');
      showSection($(this).attr('href'), true);
    });

  }, []);

  

        const showSection = (section, isAnimate) => {
          var
          direction = section.replace(/#/, ''),
          reqSection = $('.section').filter('[data-section="' + direction + '"]'),
          reqSectionPos = reqSection.offset().top - 0;

          if (isAnimate) {
            $('body, html').animate({
              scrollTop: reqSectionPos },
            800);
          } else {
            $('body, html').scrollTop(reqSectionPos);
          }

        };

        const checkSection = () => {
          $('.section').each(function () {
            var
            $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
              var
              currentId = $this.data('section'),
              reqLink = $('a').filter('[href*=\\#' + currentId + ']');
              reqLink.closest('li').addClass('active').siblings().removeClass('active');
            }
          });
        };

  return (
    <React.Fragment>
      <Header />
      <MainBanner />
      <WhyUs />
      <ComingSoon />
      <Courses />
      <Video />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
