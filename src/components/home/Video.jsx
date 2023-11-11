import React from "react";

const Video = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Choisis slate</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <span>Notre plateforme c'est pour toi</span>
              <h4>
                Regarder cette video pour decouvrir un peu plus sur{" "}
                <em>Slate</em>
              </h4>
              <p>
                Slate est une plateforme web qui sert de carrefour de l'entraide
                entre étudiants. Les utilisateurs peuvent poser des questions
                sur divers sujets académiques, des devoirs aux projets, et
                recevoir des réponses de leurs camarades. 
              </p>
              <div className="main-button">
                <a href="#!">Voir plus</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <h4>A propos de Slate</h4>
              </div>
              <figure>
                <a href="#!" className="play">
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
