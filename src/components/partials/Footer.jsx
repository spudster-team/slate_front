import React from "react";

const Footer = () => {
  return (
    <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}>
            
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#366fba"}}
             >
              
      <div className="mr-5">
        <span>Rejoignez-nous sur les réseaux sociaux :</span>
      </div>

      <div>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-google"></i>
        </a>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#!" className="text-white mr-4">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </section>

    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Slate</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#f5a425", height: "2px"}}
                />
            <p className="text-muted">
            Slate est une plateforme web qui sert de carrefour de l'entraide
                entre étudiants.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Produits</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#f5a425", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">Spudster</a>
            </p>
            <p>
              <a href="#!" className="text-white">Spudster</a>
            </p>
            <p>
              <a href="#!" className="text-white">Spudster</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Liens utiles</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#f5a425", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">Mon compte</a>
            </p>
            <p>
              <a href="#!" className="text-white">Questions</a>
            </p>
            <p>
              <a href="#!" className="text-white">Aide?</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#f5a425", height: "2px"}}
                />
            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
          </div>
        </div>
      </div>
    </section>
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2023 Copyright:
      <a className="text-white" href="#!">Spudster</a>
    </div>
  </footer>
  );
};

export default Footer;
