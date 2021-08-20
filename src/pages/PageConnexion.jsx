import "./../scss/PageConnexion.scss";
import React from "react";
import { Link } from "react-router-dom";
import PageHome from "./../pages/PageHome.jsx"

const PageConnexion = () => {
  return (
    <>
      <div className="pageconnexion">
        <div className="loginbox">
          <div className="titre">
            <h2>Login</h2>
          </div>
          <div className="login_input">
            <form className="input-container">
              <label>Login</label> <br />
              <input className="w3-input" type="text" />
              <br />
              <label>Password</label> <br />
              <input className="w3-input" type="password" />
              <p>Mot de passe oublier ?</p>
            </form>
            <div className="Login_validate">
              <Link className="btn-validate" to="/PageHome">
                Valider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageConnexion;
