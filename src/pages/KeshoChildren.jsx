import react from "react";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";

import user_img from "../images/user_img.png";

import KeshoSearchTab from "../components/Tables/KeshoSearchTab";
import KeshoPagination from "../components/Tables/KeshoPagination";
import Navbar from "../components/Navbar";
const KeshoChildren = () => {
  return (
    <>
      <div className="homme_main">
        <div className="nav_item nav_burger">
          <div className="nav_icon">
            <li className="nav-item">
              <a className="nav-link">
                <i className="fas fa-bars" onclick="collapseSidebar()"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="nav_item">
          <form className="navbar-search">
            <input
              type="text"
              name="Search"
              className="navbar-search-input"
              placeholder="What you looking for..."
            />
            <i className="fas fa-search"></i>
          </form>
        </div>
        <div className="nav_item nav_setting">
          <div className="nav_icon">
            <i class="fas fa-moon dark-icon"></i>
          </div>

          <div className="nav_icon">
            <a clasName="nav-link">
              <i
                className="fas fa-bell dropdown-toggle"
                data-toggle="notification-menu"
              ></i>
            </a>
          </div>

          <div className="nav_icon">
            <div className="avt dropdown">
              <img
                src={user_img}
                alt="User image"
                className="dropdown-toggle"
                data-toggle="user-menu"
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar/>

      <div className="wrapper d-flex">
        {/* <KeshoSearchTab></KeshoSearchTab> */}
        <div className="col-sm-9">
          <KeshoPagination />
        </div>
        <div className="col-sm-3">
          
        <div className="col-sm-12 form-user">
                <div className="form-title">
                  <h3>Compte utilisateur</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="form-horizontal user-form">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-main form-main-user">
                   
                    <ul class="list-group">
                    <li class="list-group-item">
                    <div className="user-img">
                      <img
                        src={user_img}
                        alt="User image"
                        className="img"
                        data-toggle="user-menu"
                      />
                    </div>
                     </li>
                        <li class="list-group-item">Nome: </li>
                        <li class="list-group-item">Prenom: </li>
                        <li class="list-group-item">Postnom: </li>
                        <li class="list-group-item">Sexe: </li>
                        <li class="list-group-item">
                          Date de naissance: 
                        </li>
                        <li class="list-group-item">
                          Groupe de consulation: 
                        </li>
                        <li class="list-group-item">Adresse: </li>
                        <li class="list-group-item">Provenance: </li>
                        <li class="list-group-item">
                          Mode d'arrivé: 
                        </li>
                      </ul>
                  <div className="form-footer-user">
                    <button className="btn signup">Register</button>
                  </div>
                  </div>
                </form>
              </div>
        </div>
      </div>
    </>
  );
};
export default KeshoChildren;
