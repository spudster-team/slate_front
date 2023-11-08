import React from "react";

const Video = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <span>our presentation is for you</span>
              <h4>
                Watch the video to learn more <em>about Grad School</em>
              </h4>
              <p>
                You are NOT allowed to redistribute this template ZIP file on
                any template collection website. However, you can use this
                template to convert into a specific theme for any kind of CMS
                platform such as WordPress. You may{" "}
                <a
                  rel="nofollow"
                  href="https://templatemo.com/contact"
                  target="_parent"
                >
                  contact TemplateMo
                </a>{" "}
                for details.
                <br />
                <br />
                Suspendisse tincidunt, magna ut finibus rutrum, libero dolor
                euismod odio, nec interdum quam felis non ante.
              </p>
              <div className="main-button">
                <a
                  rel="nofollow"
                  href="https://fb.com/templatemo"
                  target="_parent"
                >
                  External URL
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <h4>Power HTML Template</h4>
              </div>
              <figure>
                <a
                  href="https://www.youtube.com/watch?v=r9LtOG6pNUw"
                  className="play"
                >
                  <img src="assets/images/main-thumb.png" alt="" />
                </a>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
