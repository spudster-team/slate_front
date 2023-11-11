import React, { useState } from "react";
import { checkResponse, validEmail, validPassword } from "../../utils/utility";
import { NavLink } from "react-router-dom";
import '../../auth.css';

const SignUp = ({isLogin}) => {
  const URL_SIGNUP = "https://slate-service-api.onrender.com/api/user";
  const BASE_URL = window.location.host;

  if(isLogin) window.location.href = `http://${BASE_URL}/`;

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessages([]);

    if(isLoading) return;
    
    setIsLoading(true);
    if (formValid()) {
      let data = postSignUp();
      if (data !== null) {
        data.then((response) => {
          if (response.ok) {
            response.json().then((response) => {
              console.log(response);
              let user = response.user;
              let token = response.token;
              sessionStorage.setItem("user", JSON.stringify(user));
              sessionStorage.setItem("token", token);
              setIsLoading(false);
              //window.location.href = `http://${BASE_URL}/`;
            });
          } else {
            let requirements = ["first_name", "last_name", "email", "password"];
            response.json().then((error) => {
              var errors = checkResponse(requirements, error);
              console.log(errors);
              setErrorMessages(errors);
              setIsLoading(false);
            });
          }
        }).catch((error) => {
          setErrorMessages(["Erreur interne"]);
          setIsLoading(false);
        });
      }
    }else {
        setIsLoading(false);
    }
  };

  const formValid = () => {
    let errors = [];
    if (
      nom === "" ||
      prenom === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      errors.push("Veuillez remplir tous les champs");
      setErrorMessages(errors);
      return false;
    } else if (!validEmail(email)) {
      errors.push("Veuillez entrer un email valide");
      setErrorMessages(errors);
      return false;
    } else if (!validPassword(password)) {
      errors.push(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre, des caractères speciaux"
      );
      setErrorMessages(errors);
      return false;
    } else if (password !== confirmPassword) {
      errors.push("Les mots de passe ne correspondent pas");
      setErrorMessages(errors);
      return false;
    } else {
      return true;
    }
  };

  const postSignUp = async () => {
    return await fetch(URL_SIGNUP, {
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: prenom,
        last_name: nom,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div className="center">
      <div className="main-form">
        <div className="form-container">
          <div className="h1">S'inscrire</div>
          {errorMessages.length > 0 ? (
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-warning" role="alert">
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <form>
            <div className="fieldset">
              <input
                className=""
                value={nom}
                type="text"
                placeholder="Nom"
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="fieldset">
              <input
                className=""
                type="text"
                placeholder="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
            <div className="fieldset">
              <input
                className=""
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="fieldset">
              <input
                className=""
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="fieldset">
              <input
                className=""
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <a href="#test">Mot de passe oublié ?</a>
            </div>
            <div className="button-form">
              <div
                className="btn btn-yellow"
                onClick={handleSubmit}
                disabled={isLoading ? true : false}
              >
                <span style={{ marginRight: isLoading ? "10px" : "0px" }}>S'inscire</span>
                {isLoading && (
                  <div
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
              <NavLink to={"/login"} className="btn btn-outline-light">
                Se connecter
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
