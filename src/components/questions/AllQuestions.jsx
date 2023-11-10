import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const AllQuestions = () => {
  return (
    <React.Fragment>
      <div className="mt-5 p-5">
        <div className="main-home row justify-content-between">
          <div className="col">
            <div className="tri-btn-group">
              <div className="tri-btn tri-active">top</div>
              <div className="tri-btn">Nouvelles</div>
              <div className="tri-btn">Pas encore repondu</div>
            </div>
            <div className="list-question">
              <div className="question-element row align-items-center">
                <div className="col my-2 align-content-center">
                  <div className="question-title my-2">
                    <Link to={"/questions/1"}>
                      Comment resoudre une equation a n inconnue
                    </Link>
                  </div>
                  <div className="question-tag-list d-flex ">
                    <div className="question-tag-element">math</div>
                    <div className="question-tag-element">equation</div>
                  </div>
                  <div className="question-element-footer mt-2">
                    <span>
                      <i className="fa fa-reply "></i> 4 reponses
                    </span>{" "}
                    | <span className="question-element-time">Il y a 10h </span>
                    <span className="question-element-user">
                      par <a href="#test">Rakotoarimanana</a>
                    </span>
                  </div>
                </div>
                <div className="question-vote-section col-2">
                  <div className="up row">
                    <i className="fa fa-arrow-up fa-2x text-yellow"></i>
                    <span className="vote-value">+10</span>
                  </div>
                </div>
              </div>
              <div className="question-element row align-items-center">
                <div className="col my-2 align-content-center">
                  <div className="question-title my-2">
                    <a href="#test">
                      Comment resoudre une equation a n inconnue
                    </a>
                  </div>
                  <div className="question-tag-list d-flex ">
                    <div className="question-tag-element">math</div>
                    <div className="question-tag-element">equation</div>
                  </div>
                  <div className="question-element-footer mt-2">
                    <span>
                      <i className="fa fa-reply "></i> 4 reponses
                    </span>{" "}
                    | <span className="question-element-time">Il y a 10h </span>
                    <span className="question-element-user">
                      par <a href="#test">Rakotoarimanana</a>
                    </span>
                  </div>
                </div>
                <div className="question-vote-section col-2">
                  <div className="up row">
                    <i className="fa fa-arrow-up fa-2x text-yellow"></i>
                    <span className="vote-value">+10</span>
                  </div>
                </div>
              </div>
              <div className="question-element row align-items-center">
                <div className="col my-2 align-content-center">
                  <div className="question-title my-2">
                    <a href="#test">
                      Comment resoudre une equation a n inconnue
                    </a>
                  </div>
                  <div className="question-tag-list d-flex ">
                    <div className="question-tag-element">math</div>
                    <div className="question-tag-element">equation</div>
                  </div>
                  <div className="question-element-footer mt-2">
                    <span>
                      <i className="fa fa-reply "></i> 4 reponses
                    </span>{" "}
                    | <span className="question-element-time">Il y a 10h </span>
                    <span className="question-element-user">
                      par <a href="#test">Rakotoarimanana</a>
                    </span>
                  </div>
                </div>
                <div className="question-vote-section col-2">
                  <div className="up row">
                    <i className="fa fa-arrow-up fa-2x text-yellow"></i>
                    <span className="vote-value">+10</span>
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
              <h2>Les utilisateurs les plus actifs</h2>
              <div className="list-user-actif my-3">
                <div className="user-element row align-items-center">
                  <div className="col-1 user-element-photo">
                    <img src="./assets/images/avatar-sample.jpg" alt="pdp" />
                  </div>
                  <div className="col">
                    <div className="user-element-username">
                      <a href="#test">Rakotoarimanana</a>
                    </div>
                    <div className="user-element-top-tag">Histoire</div>
                  </div>
                </div>
                <div className="user-element row align-items-center">
                  <div className="col-1 user-element-photo">
                    <img src="./assets/images/avatar-sample.jpg" alt="pdp" />
                  </div>
                  <div className="col">
                    <div className="user-element-username">
                      <a href="#test">Rakotoarimanana</a>
                    </div>
                    <div className="user-element-top-tag">Histoire</div>
                  </div>
                </div>
                <div className="user-element row align-items-center">
                  <div className="col-1 user-element-photo">
                    <img src="./assets/images/avatar-sample.jpg" alt="pdp" />
                  </div>
                  <div className="col">
                    <div className="user-element-username">
                      <a href="#test">Rakotoarimanana</a>
                    </div>
                    <div className="user-element-top-tag">Histoire</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllQuestions;
