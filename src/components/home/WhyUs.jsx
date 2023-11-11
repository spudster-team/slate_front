import React from "react";

const WhyUs = () => {
  return (
    <section className="section why-us" data-section="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>C'est quoi Slate?</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div id="tabs">
              <section className="tabs-content">
                <article id="tabs-1">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="assets/images/choose-us-image-01.png"
                        alt="img-why-us"
                      />
                    </div>
                    <div className="col-md-6">
                      <h4>Plateforme d'entraide entre étudiant</h4>
                      <p>
                        Slate est une plateforme en ligne conçue pour faciliter
                        l'entraide entre les étudiants. Elle permet aux
                        utilisateurs de poser des questions et de recevoir des
                        réponses de leurs pairs.
                      </p>
                    </div>
                  </div>
                </article>
                <article id="tabs-2">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="assets/images/choose-us-image-02.png"
                        alt="img-why-us"
                      />
                    </div>
                    <div className="col-md-6">
                      <h4>Questions et réponses</h4>
                      <p>
                        Les étudiants peuvent poser des questions sur une
                        variété de sujets, que ce soit lié à leurs cours, à des
                        projets, à des devoirs, ou à d'autres domaines
                        académiques. Les autres utilisateurs de Slate peuvent
                        fournir des réponses, des conseils et des explications.
                      </p>
                    </div>
                  </div>
                </article>
                <article id="tabs-3">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src="assets/images/choose-us-image-03.png"
                        alt="img-why-us"
                      />
                    </div>
                    <div className="col-md-6">
                      <h4>Système de notation</h4>
                      <p>
                        Slate peut intégrer un système de notation pour les
                        réponses fournies par les utilisateurs. Cela permet de
                        mettre en avant les réponses les plus utiles et de
                        récompenser les contributeurs les plus actifs.
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
