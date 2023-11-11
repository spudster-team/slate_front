import React, { useEffect, useState } from "react";

const Account = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="row mt-5">
          <div className="col-md-12">
            <h1>Mon profil</h1>
            <hr style={{ borderColor: "gray" }} />
            <div className="row">
              <div className="col-md-8">
                <h5>
                  <b>Nom</b> : <i>{user.first_name}</i>
                </h5>
                <h5>
                  <b>Prénoms</b> : <i>{user.last_name}</i>
                </h5>
                <h5>
                  <b>Email</b> : <i>{user.email}</i>
                </h5>
              </div>
              <div className="col-md-4">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                  className="avatar"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <hr style={{ borderColor: "gray" }} />
            <button className="btn btn-yellow">Modifier</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
