import React from "react";

const MainBanner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video">
        <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <h2>
            Bienvenue sur <em>Slate</em> - L'université des Questions et
            Réponses
          </h2>
          <div className="row mb-3 mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="search-bar input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control search-bar-input"
                  placeholder="Rechercher un sujet, questions, des réponses..."
                />
              </div>
            </div>
          </div>
          <div className="main-button">
            <div className="scroll-to-section">
              <a href="#section2" className="search-btn">Rechercher</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
