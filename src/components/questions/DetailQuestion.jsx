import React, { useState, useEffect, useRef } from "react";
//import "./details.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";

const DetailQuestion = ({ isLogin }) => {
  const BASE_URL = window.location.host;
  const QUESTION_DETAIL_URL =
    "https://slate-service-api.onrender.com/api/question/";
  const RESPONSE_URL =
    "https://slate-service-api.onrender.com/api/question/response/";
  const RESPONSE_VOTE_URL =
    "https://slate-service-api.onrender.com/api/response/vote/";
  const RESPONSE_DELETE_URL =
    "https://slate-service-api.onrender.com/api/response/";

  const editor = useRef(null);

  const [question, setQuestion] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const [isDeleteQuestionLoading, setIsDeleteQuestionLoading] = useState(false);
  const [user, setUser] = useState({});

  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    height: 250,
    placeholder: "Ecrivez quelque chose...",
    language: "fr",
  };

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
    if (
      content === "" ||
      content === "<p></p>" ||
      content === "<p><br></p>" ||
      content === "<p><b></b></p>"
    ) {
      Swal.fire({
        title: "Information!",
        text: "Veuillez saisir votre reponse",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    setIsResponseLoading(true);
    let form = document.getElementById("form_response");
    let photo = document.getElementById("photo").files[0];
    let formData = new FormData();
    formData.append("content", content);
    if (photo !== undefined && photo !== null) {
      formData.append("photo", photo);
    }
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

  const voteQuestion = (e, vote) => {
    if (!isLogin) {
      Swal.fire({
        title: "Information!",
        text: "Vous devez vous connecter pour voter",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = `http://${BASE_URL}/login`;
        }
      });
      return;
    }
    let element = e.target;
    let loading = document.createElement("div");
    loading.className = "spinner-border spinner-border-sm text-primary";
    loading.setAttribute("role", "status");
    loading.style.marginLeft = "10px";
    let original_content = element.innerHTML;
    element.innerHTML = loading.outerHTML;

    let id = window.location.pathname.split("/")[2];
    let headers = new Headers();
    headers.append("Authorization", "token " + sessionStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    let req = fetch(QUESTION_DETAIL_URL + "vote/" + id, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        is_upvote: vote,
      }),
    });
    req
      .then((response) => {
        if (response.ok) {
          let data = fetchQuestion();
          if (data !== null) {
            data
              .then((response) => {
                if (response.ok) {
                  return response.json().then((res) => {
                    setQuestion(res);
                    //setIsLoading(false);
                    element.innerHTML = original_content;
                  });
                } else {
                  //setIsLoading(false);
                  element.innerHTML = original_content;
                }
              })
              .catch((error) => {
                console.error(error);
                element.innerHTML = original_content;
                //setIsLoading(false);
              });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const voteResponse = (e, id, vote) => {
    if (!isLogin) {
      Swal.fire({
        title: "Information!",
        text: "Vous devez vous connecter pour voter",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = `http://${BASE_URL}/login`;
        }
      });
      return;
    }

    let element = e.target;
    let loading = document.createElement("div");
    loading.className = "spinner-border spinner-border-sm text-primary";
    loading.setAttribute("role", "status");
    loading.style.marginLeft = "10px";
    let original_content = element.innerHTML;
    element.innerHTML = loading.outerHTML;

    let headers = new Headers();
    headers.append("Authorization", "token " + sessionStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    let req = fetch(RESPONSE_VOTE_URL + id, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        is_upvote: vote,
      }),
    });
    req
      .then((response) => {
        if (response.ok) {
          element.innerHTML = original_content;
          getAllQuestions();
        }
      })
      .catch((error) => {
        element.innerHTML = original_content;
        console.error(error);
      });
  };

  const getAllQuestions = () => {
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
  };

  const deleteQuestion = (id) => {
    if (!isLogin) {
      Swal.fire({
        title: "Information!",
        text: "Vous devez vous connecter pour supprimer une question",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = `http://${BASE_URL}/login`;
        }
      });
      return;
    }
    setIsDeleteQuestionLoading(true);

    let headers = new Headers();
    headers.append("Authorization", "token " + sessionStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    let req = fetch(QUESTION_DETAIL_URL + id, {
      method: "DELETE",
      headers: headers,
    });
    req
      .then((response) => {
        if (response.ok) {
          setIsDeleteQuestionLoading(false);
          window.location.href = `http://${BASE_URL}/questions`;
        }
      })
      .catch((error) => {
        setIsDeleteQuestionLoading(false);
        console.error(error);
      });
  };

  const deleteResponse = (e, id) => {
    if (!isLogin) {
      Swal.fire({
        title: "Information!",
        text: "Vous devez vous connecter pour supprimer une reponse",
        icon: "warning",
        confirmButtonText: "Ok",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.href = `http://${BASE_URL}/login`;
        }
      });
      return;
    }

    let element = e.target;
    let loading = document.createElement("div");
    loading.className = "spinner-border spinner-border-sm text-primary";
    loading.setAttribute("role", "status");
    loading.style.marginLeft = "10px";
    element.appendChild(loading);

    let headers = new Headers();
    headers.append("Authorization", "token " + sessionStorage.getItem("token"));
    headers.append("Content-Type", "application/json");
    let req = fetch(RESPONSE_DELETE_URL + id, {
      method: "DELETE",
      headers: headers,
    });
    req
      .then((response) => {
        if (response.ok) {
          getAllQuestions();
          element.removeChild(loading);
        }
      })
      .catch((error) => {
        console.error(error);
        element.removeChild(loading);
      });
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
                      {user &&
                        question.owner &&
                        user.id === question.owner.id && (
                          <div>
                            <button
                              className="btn btn-danger"
                              onClick={(e) => deleteQuestion(question.id)}
                            >
                              <span>Supprimer</span>
                              {isDeleteQuestionLoading && (
                                <div
                                  className="spinner-border spinner-border-sm text-primary"
                                  role="status"
                                  style={{ marginLeft: "10px" }}
                                >
                                  <span class="sr-only">Loading...</span>
                                </div>
                              )}
                            </button>
                          </div>
                        )}
                    </div>
                    {question && question.photo && (
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            style={{maxWidth: "100%"}}
                            src={question.photo.path && question.photo.path}
                            alt={question.title}
                          />
                        </div>
                      </div>
                    )}
                    <div className="question-content my-4">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: question && question.content,
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-content-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <i className="fa fa-clock-o"></i> Il y a{" "}
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
                                ? question.owner.photo.path
                                : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm"
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
                      <button
                        id="up_vote"
                        className="btn btn-vote"
                        onClick={(e) => voteQuestion(e, true)}
                      >
                        <i className="fa fa-arrow-up"></i>
                      </button>
                      <div className="vote-value">
                        {question &&
                          (question.up_vote - question.down_vote).toString()}
                      </div>
                      <button
                        id="down_vote"
                        className="btn btn-vote"
                        onClick={(e) => voteQuestion(e, false)}
                      >
                        <i className="fa fa-arrow-down"></i>
                      </button>
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
                              <div
                                className={
                                  user &&
                                  reponse.owner &&
                                  user.id === reponse.owner.id
                                    ? "col-9"
                                    : "col"
                                }
                              >
                                <div className="reponse-content">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: reponse && reponse.content,
                                    }}
                                  />
                                  <div className="reponse-image">
                                    {reponse && reponse.photo && (
                                      <img src={reponse.photo.path} alt="" />
                                    )}
                                  </div>
                                </div>
                              </div>
                              {user &&
                                reponse.owner &&
                                user.id === reponse.owner.id && (
                                  <div className="col-2">
                                    <button
                                      className="btn btn-danger"
                                      onClick={(e) =>
                                        deleteResponse(e, reponse.id)
                                      }
                                    >
                                      Supprimer
                                    </button>
                                  </div>
                                )}
                              <div className="col-1">
                                <div className="vote-btn-section d-flex flex-column align-items-center">
                                  <button
                                    onClick={(e) =>
                                      voteResponse(e, reponse.id, true)
                                    }
                                    className="btn btn-vote"
                                  >
                                    <i className="fa fa-arrow-up"></i>
                                  </button>
                                  <div className="vote-value">
                                    {reponse &&
                                      (
                                        reponse.up_vote - reponse.down_vote
                                      ).toString()}
                                  </div>
                                  <button
                                    onClick={(e) =>
                                      voteResponse(e, reponse.id, false)
                                    }
                                    className="btn btn-vote"
                                  >
                                    <i className="fa fa-arrow-down"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="row my-4">
                              <div className="col">
                                <div>
                                  <p>
                                    Par{" "}
                                    <a href="#!">@{reponse.owner.first_name}</a>
                                  </p>
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
                    {isLogin ? (
                      <React.Fragment>
                        <h3 className="py-4">Repondre</h3>
                        <form
                          id="form_response"
                          onSubmit={handleResponseSubmit}
                        >
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            onBlur={(e) => setContent(e)}
                            onChange={(e) => {}}
                          />
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
                      </React.Fragment>
                    ) : (
                      <h4>
                        Veuillez vous connecter pour répondre aux questions!
                      </h4>
                    )}
                  </div>
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
