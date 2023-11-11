import React from "react";

const Contact = () => {
  return (
    <section className="section contact" data-section="section6">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Nous contacter?</h2>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Votre nom"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Votre email"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Votre message..."
                      required=""
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" className="button">
                      Envoyer le message
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
