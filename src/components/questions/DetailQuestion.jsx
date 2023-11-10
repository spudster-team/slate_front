import React, { useState, useEffect } from "react";
import "./details.css";
import { Link } from "react-router-dom";

const DetailQuestion = () => {
  const QUESTION_DETAIL_URL =
    "https://slate-service-api.onrender.com/api/question/";
  const RESPONSE_URL =
    "https://slate-service-api.onrender.com/api/question/response/";

  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);

    //set user
    let user = sessionStorage.getItem("user");
    if (user !== null) {
      setUser(JSON.parse(user));
    }

    let data = fetchQuestion();
    if (data !== null) {
      data
        .then((response) => {
          if (response.ok) {
            return response.json().then((res) => {
              setQuestion(res);
              setIsLoading(false);
            });
          } else {
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, []);

  const fetchQuestion = async () => {
    let id = window.location.pathname.split("/")[2];
    return await fetch(QUESTION_DETAIL_URL + id);
  };

  const postResponse = async (data) => {
    let id = window.location.pathname.split("/")[2];
    let headers = new Headers();
    headers.append("Authorization", "token " + sessionStorage.getItem("token"));

    return fetch(RESPONSE_URL + id, {
      method: "POST",
      headers: headers,
      body: data,
    });
  };

  const handleResponseSubmit = (e) => {
    e.preventDefault();
    setIsResponseLoading(true);
    let form = document.getElementById("form_response");
    let formData = new FormData(form);
    let req = postResponse(formData);
    req
      .then((response) => {
        if (response.ok) {
          return response.json().then((res) => {
            setIsLoading(false);
            let data = fetchQuestion();
            if (data !== null) {
              data
                .then((response) => {
                  if (response.ok) {
                    return response.json().then((res) => {
                      form.reset();
                      setQuestion(res);
                      setIsResponseLoading(false);
                    });
                  }
                })
                .catch((error) => {
                  console.error(error);
                  setIsResponseLoading(false);
                });
            }
          });
        } else {
          setIsResponseLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsResponseLoading(false);
      });
  };

  console.log(user);

  return (
    <React.Fragment>
      <div className="mt-5 p-5">
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
              <div className="col-md-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent border border-secondary">
                    <li className="breadcrumb-item">
                      <Link to="/questions">Tous les questions</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {question && question.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="main-home row justify-content-between">
              <div className="col">
                <div className="main-question row align-items-center">
                  {}
                  <div className="col">
                    <div className="question-title py-3 d-flex justify-content-between">
                      <h3>
                        #{question && question.id} {question && question.title}
                      </h3>
                      {user && question.owner && (user.id === question.owner.id) && (
                        <div>
                          <button className="btn btn-danger">Supprimer</button>
                        </div>
                      )}
                    </div>
                    {question && question.photo && (
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            src={question.photo.path && question.photo.path}
                            alt={question.title}
                          />
                        </div>
                      </div>
                    )}
                    <div className="question-content my-4">
                      {question && question.content}
                    </div>
                    <div className="d-flex justify-content-between align-content-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <i className="fa fa-clock-o"></i> il y a{" "}
                          {question && question.date_posted}
                        </div>
                        <div className="mx-5 tags-list">
                          <i className="fa fa-tags"></i>
                          {question &&
                            question.tag &&
                            question.tag.map((tg, index) => {
                              return (
                                <a key={index} className="mx-2" href="#test">
                                  {tg.title}
                                </a>
                              );
                            })}
                          {question &&
                            question.tag &&
                            question.tag.length === 0 && (
                              <span className="mx-2">Pas de tag</span>
                            )}
                        </div>
                      </div>
                      <div className="d-flex author">
                        <div className="author-pdp">
                          <img
                            src={
                              question &&
                              question.owner &&
                              question.owner.photo.path
                            }
                            alt="pdp"
                          />
                        </div>
                        <div className="author-name">
                          <a href="#test">
                            @
                            {question &&
                              question.owner &&
                              question.owner.first_name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="vote-btn-section d-flex flex-column align-items-center">
                      <div className="btn btn-vote">
                        <i className="fa fa-arrow-up"></i>
                      </div>
                      <div className="vote-value">
                        {question &&
                          (question.up_vote - question.down_vote).toString()}
                      </div>
                      <div className="btn btn-vote">
                        <i className="fa fa-arrow-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reponse-section my-4">
                  <h3 className="py-4">
                    {question && question.n_response} Reponse
                    {question && question.n_response > 1 ? "s" : ""}
                  </h3>
                  <div className="list-reponse">
                    {question &&
                      question.response &&
                      question.response.map((reponse, index) => {
                        return (
                          <div key={index} className="reponse-element mb-3">
                            <div className="row">
                              <div className="col">
                                <div className="reponse-content">
                                  {reponse.content}
                                </div>
                              </div>
                              <div className="col-1">
                                <div className="vote-btn-section d-flex flex-column align-items-center">
                                  <div className="btn btn-vote">
                                    <i className="fa fa-arrow-up"></i>
                                  </div>
                                  <div className="vote-value">
                                    {reponse &&
                                      (
                                        reponse.up_vote - reponse.down_vote
                                      ).toString()}
                                  </div>
                                  <div className="btn btn-vote">
                                    <i className="fa fa-arrow-down"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row my-4">
                              <div className="col">
                                <div>
                                  <p>Par @{reponse.owner.first_name}</p>
                                  <i className="fa fa-clock-o"></i> il y a{" "}
                                  {reponse.date_posted}
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                border: "1px solid #fff",
                                width: "50%",
                                height: "1px",
                              }}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form id="form_response" onSubmit={handleResponseSubmit}>
                      <textarea
                        id="content"
                        name="content"
                        className="form-control mb-3"
                        placeholder="Repondre au question..."
                        required
                      ></textarea>
                      <label htmlFor="file">Ajouter une image</label>
                      <input
                        type="file"
                        name="photo"
                        id="photo"
                        className="form-control mb-2"
                      />
                      <button type="submit" className="btn btn-yellow">
                        <span>REPONDRE</span>
                        {isResponseLoading && (
                          <div
                            className="spinner-border spinner-border-sm text-primary"
                            role="status"
                            style={{ marginLeft: "10px" }}
                          >
                            <span class="sr-only">Loading...</span>
                          </div>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-3 mx-5">
                <Link to={"/ask-question"} className="btn btn-yellow">
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
                  <h3>Question similaire</h3>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default DetailQuestion;
