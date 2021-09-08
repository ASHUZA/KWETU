import "./../scss/PageConnexion2.scss";
import icon_user from "./../images/svg/bxs-user.svg";
import icon_lock from "./../images/svg/bxs-lock-alt.svg";
import img_connection from "./../images/svg/connexion.svg";
import React from "react";
import { Link } from "react-router-dom";
import PageHome from "./../pages/PageHome.jsx";

const PageConnexion2 = () => {
  return (
    <>
      <div className="container--fluid">
        <div className="row content-row">
          <div className="col1 bloc1">
            <div className="text sign-in">
              <h2>Welcome back</h2>
              <p>
                Kesho Congo  dolor sit amet consectetur, adipisicing elit. Natus
                culpa, neque ex, non accusantium quibusdam atque architecto quas
                ullam 
              </p>
            </div>
            <div className="img sign-in">
              <img src={img_connection} alt="login image" />
            </div>
          </div>
          <div className="col bloc2 align-items-center">
            <div className="form-wrapper align-items-center">
              <div className="form">
                <div className="input-group">
                  {/* <i className="bx bxs-user"></i> */}
                  <box-icon name='user' type='solid' ></box-icon>
                  <img src={icon_user} alt="user icon"/>
                  <input type="text" placeholder="username" />
                </div>
                <div className="input-group">
                <img src={icon_lock} alt="user icon"/>
                 
                   <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                {/* <p>
                  <b>Forgot paswword ?</b>
                </p>
                <p>
                  Don't have an account ?
                  
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageConnexion2;
