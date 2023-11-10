import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { validEmail } from "../../utils/utility";
import '../../auth.css';

const Login = ({isLogin}) => {
  const BASE_URL = window.location.host;

  if(isLogin) window.location.href = `http://${BASE_URL}/`;

  const URL_LOGIN = "https://slate-service-api.onrender.com/api/user/auth";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if(isLoading) return;

    setIsLoading(true);

    if (formValid()) {
      let response = fetchLogin();
      if (response !== null) {
        response.then((response) => {
          if (response.ok) {
              return response.json().then((res) => {
                console.log(res);
                sessionStorage.setItem("user", JSON.stringify(res.user));
                sessionStorage.setItem("token", res.token);
                setIsLoading(false);
                window.location.href = `http://${BASE_URL}/`;
              });
          } else {
            setError("Email ou mot de passe incorrect");
            setIsLoading(false);
          }
        });
      }
    } else {
        setIsLoading(false);
    }
  };

  const fetchLogin = async () => {
    return await fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  const formValid = () => {
    if (email === "" || password === "") {
      setError("Veuillez remplir tous les champs");
      return false;
    } else if (!validEmail(email)) {
      setError("Veuillez entrer un email valide");
      return false;
    }
    return true;
  };

  return (
    <div className="center">
      <div className="main-form">
        <div className="form-container">
          <div className="h1">Se connecter</div>
          {error && (
            <div className="row">
              <div className="col-md-12">
                <div className="alert alert-warning" role="alert">
                  {error}
                </div>
              </div>
            </div>
          )}
          <form action="">
            <div className="fieldset">
              <input
                className=""
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="fieldset">
              <input
                className=""
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
              />
            </div>
            <div>
              <a href="#test">Mot de passe oublié ?</a>
            </div>
            <div className="button-form">
              <div className="btn btn-yellow" 
              onClick={handleSubmit}
              disabled={isLoading ? true : false}
              >
                <span style={{ marginRight: isLoading ? "10px" : "0px" }}>Se connecter</span>
                {isLoading && (
                  <div
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
              <NavLink to={"/sign-up"} className="btn btn-outline-light">
                S'inscrire
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
