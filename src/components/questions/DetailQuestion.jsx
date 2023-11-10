import React from "react";

const DetailQuestion = () => {
  return (
    <React.Fragment>
      <div className="mt-5 p-5">
        <div className="main-home row justify-content-between">
          <div className="col">
            <div className="main-question row align-items-center">
              <div className="col">
                <div className="question-title py-3">
                  Comment resoudre une equation a n inconnus
                </div>
                <div className="question-content my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia nemo, cumque totam ad, dolorem rem voluptas, quisquam
                  minus blanditiis porro harum hic repellat beatae quas.
                  Recusandae accusantium ipsum odio natus. Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Voluptate fugit nobis
                  delectus, officia, sit earum tempora repudiandae voluptates
                  architecto, voluptatem accusamus iusto labore ipsa a
                  distinctio ullam omnis aperiam facere?
                </div>
                <div className="d-flex justify-content-between align-content-center">
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="fa fa-clock-o"></i> il y a 10h
                    </div>
                    <div className="mx-5 tags-list">
                      <i className="fa fa-tags"></i>
                      <a className="mx-2" href="#test">
                        math
                      </a>
                      <a className="mx-2" href="#test">
                        equation
                      </a>
                    </div>
                  </div>
                  <div className="d-flex author">
                    <div className="author-pdp">
                      <img src="./assets/images/avatar-sample.jpg" alt="pdp" />
                    </div>
                    <div className="author-name">
                      <a href="#test">@rakotoarimanana</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="vote-btn-section d-flex flex-column align-items-center">
                  <div className="btn btn-vote">
                    <i className="fa fa-chevron-up"></i>
                  </div>
                  <div className="vote-value">12</div>
                  <div className="btn btn-vote">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="reponse-section my-4">
              <h3 className="py-4">2 Reponses</h3>
              <div className="list-reponse">
                <div className="reponse-element">
                  <div className="reponse-content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quaerat fugit voluptate laudantium laborum? Impedit possimus
                    beatae voluptates accusantium quaerat voluptatibus
                    dignissimos natus, facilis dolore eligendi aliquam quos
                    magnam, pariatur adipisci?
                  </div>
                  <div className="row my-4">
                    <div className="col">
                      <div>
                        <i className="fa fa-clock-o"></i> il y a 10h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mx-5">
            <div className="btn btn-yellow">Poser une question</div>
            <div className="row tag-section my-5">
              <div className="col-2">
                <i className="fa fa-tags fa-2x"></i>
              </div>
              <div className="col">
                <h2>Tags</h2>
                <div className="tag-list">
                  <div className="tag-element">
                    <a href="#test">histoire</a>
                  </div>
                  <div className="tag-element">
                    <a href="#test">math</a>
                  </div>
                  <div className="tag-element">
                    <a href="#test">equation</a>
                  </div>
                  <div className="tag-element">
                    <a href="#test">equation</a>
                  </div>
                  <div className="tag-element">
                    <a href="#test">equation</a>
                  </div>
                  <div className="tag-element">
                    <a href="#test">equation</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Question similaire</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailQuestion;
