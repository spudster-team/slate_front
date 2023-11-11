import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllQuestions = ({ isLogin }) => {
  const BASE_URL = window.location.host;
  const QUESTIONS_URL = "https://slate-service-api.onrender.com/api/question";
  const MOST_USER_URL =
    "https://slate-service-api.onrender.com/api/user/most-active";

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mostUser, setMostUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    let search_value = window.location.search.split("=")[1];
    let data = fetchAllQuestions(search_value);
    let data2 = fetchMostUser();
    data2.then((response) => {
      if (response.ok) {
        return response.json().then((res) => {
          setMostUser(res);
        });
      }
    });

    if (data !== null) {
      data
        .then((response) => {
          if (response.ok) {
            return response.json().then((res) => {
              setQuestions(res);
              setIsLoading(false);
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);

  const fetchAllQuestions = async (search) => {
    let url = QUESTIONS_URL;
    if (search) {
      url += "?search=" + search;
    }
    return await fetch(url);
  };

  const fetchMostUser = async () => {
    return await fetch(MOST_USER_URL);
  };

  const handleSearch = (e) => {
    setIsLoading(true);
    let data = fetchAllQuestions(searchValue);

    if (data !== null) {
      data
        .then((response) => {
          if (response.ok) {
            return response.json().then((res) => {
              setQuestions(res);
              setIsLoading(false);
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  };

  const goToAskQuestion = (e) => {
    e.preventDefault();
    if (isLogin) {
      window.location.href = "/ask-question";
    } else {
      Swal.fire({
        title: "Information!",
        text: "Vous devez vous connecter pour poser une question",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = `http://${BASE_URL}/login`;
        }
      });
    }
  };

  return (
    <React.Fragment>
      <div className="mt-5 p-5">
        <div className="row mb-3">
          <div className="col-lg-8 mx-auto d-flex">
            <input
              type="text"
              className="form-control"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Rechercher un sujet, questions, des réponses..."
            />
            <button onClick={handleSearch} className="btn btn-warning ml-1">
              Rechercher
            </button>
          </div>
        </div>
        <div
          style={{
            border: "1px solid gray",
            width: "50%",
            height: "1px",
            margin: "auto",
          }}
        />
        <div className="main-home row justify-content-between">
          {isLoading ? (
            <div
              className="col-12"
              style={{
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border text-primary"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <div className="row">
                <div className="col">
                  <div className="tri-btn-group">
                    <div className="tri-btn tri-active">top</div>
                    <div className="tri-btn">Nouvelles</div>
                    <div className="tri-btn">Pas encore repondu</div>
                  </div>
                  <h4 className="mt-3">
                    {questions.length.toString()} résultat(s)
                  </h4>
                  <div className="list-question">
                    {questions &&
                      questions.map((question, index) => {
                        return (
                          <div
                            key={index}
                            className="question-element row align-items-center"
                          >
                            <div className="col my-2 align-content-center">
                              <div className="question-title my-2">
                                <Link to={"/questions/" + question.id}>
                                  {question.title}
                                </Link>
                              </div>
                              <div className="question-tag-list d-flex ">
                                {question.tag &&
                                  question.tag.map((tg, index) => {
                                    return (
                                      <div
                                        className="question-tag-element"
                                        key={index}
                                      >
                                        {tg.title}
                                      </div>
                                    );
                                  })}
                                {question.tag && question.tag.length === 0 && (
                                  <span>Pas de tag</span>
                                )}
                              </div>
                              <div className="question-element-footer mt-2">
                                <span>
                                  <i className="fa fa-reply "></i>{" "}
                                  {question.n_response} reponse
                                  {question.n_response > 1 ? "s" : ""}
                                </span>{" "}
                                |{" "}
                                <span className="question-element-time">
                                  Il y a {question.date_posted}{" "}
                                </span>
                                <span className="question-element-user">
                                  par{" "}
                                  <a href="#test">
                                    {question.owner.first_name}
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="question-vote-section col-2">
                              <div className="up row">
                                <i
                                  className="fa fa-arrow-up fa-2x text-yellow"
                                  style={{ marginRight: "10px" }}
                                ></i>
                                {question.up_vote ? (
                                  <React.Fragment>
                                    <span className="vote-value">
                                      +{question.up_vote}
                                    </span>
                                  </React.Fragment>
                                ) : (
                                  "0"
                                )}
                                <i
                                  className="fa ml-3 fa-arrow-down fa-2x text-secondary"
                                  style={{ marginRight: "10px" }}
                                ></i>
                                {question.down_vote ? (
                                  <React.Fragment>
                                    <span className="vote-value">
                                      -{question.down_vote}
                                    </span>
                                  </React.Fragment>
                                ): '0'}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {questions.length === 0 && (
                      <div className="col-md-8 mx-auto">
                        <img
                          style={{ width: "100%" }}
                          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                          alt="no result"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-3 mx-5">
                  <Link
                    onClick={goToAskQuestion}
                    to="#!"
                    className="btn btn-yellow"
                  >
                    Poser une question
                  </Link>
                  <div className="row tag-section my-5">
                    <div className="col-2">
                      <i className="fa fa-tags fa-2x"></i>
                    </div>
                    <div className="col">
                      <h3>Tags</h3>
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
                          <a href="#test">informatique</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Les utilisateurs les plus actifs</h3>
                    <div className="list-user-actif my-3">
                      {mostUser &&
                        mostUser.map((user, index) => {
                          return (
                            <div
                              key={index}
                              className="user-element mb-3 row align-items-center"
                            >
                              <div className="col-1 user-element-photo">
                                <img
                                  src={
                                    user.photo.path
                                      ? user.photo.path
                                      : "https://www.w3schools.com/howto/img_avatar.png"
                                  }
                                  alt="pdp"
                                />
                              </div>
                              <div className="col">
                                <div className="user-element-username">
                                  <a href="#test">
                                    {user.first_name} {user.last_name}
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllQuestions;
