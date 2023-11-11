import React, { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./details.css";

const NewQuestion = ({ isLogin }) => {
  const NEW_QUESTION_URL =
    "https://slate-service-api.onrender.com/api/question";

  const [isLoading, setIsLoading] = useState(false);

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const config = {
    readonly: false,
    height: 250,
		placeholder: 'Ecrivez quelque chose...',
    language: "fr",
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = window.location.origin + "/login";
    }
  }, [isLogin]);

  const publishQuestion = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("photo", document.getElementById("image").files[0]);

    let response = postQuestion(formData);

    response.then((response) => {
      if (response.ok) {
        return response.json().then((res) => {
          setIsLoading(false);
          window.location.href = window.location.origin + "/questions";
        });
      } else {
        setIsLoading(false);
        console.log(response);
      }
    });
  };

  const postQuestion = async (form) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "token " + sessionStorage.getItem("token")
    );
    return await fetch(NEW_QUESTION_URL, {
      method: "POST",
      headers: myHeaders,
      body: form,
    });
  };

  return (
    <React.Fragment>
      <div className="container mt-5 p-5 mb-5">
        <div className="row mt-3">
          <div className="col-8 mx-auto">
            <h3 className="text-center">
              Besoin d'aide? Posez votre question ici
            </h3>
            <form
              id="my_form"
              method="POST"
              encType="multipart/form-data"
              onSubmit={publishQuestion}
            >
              <div className="form-group mt-3">
                <label htmlFor="title">Titre *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenu *</label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  onBlur={(e) => setContent(e)}
                  onChange={(e) =>  {}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                  accept="image/"
                />
              </div>
              <button className="btn btn-yellow" type="submit">
                <span>PUBLIER</span>
                {isLoading && (
                  <div
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                    style={{ marginLeft: "10px" }}
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewQuestion;
