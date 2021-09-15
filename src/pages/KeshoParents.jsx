import react from "react";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";

import user_img from "../images/user_img.png";

const KeshoParents = () => {
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
      <div className="side_bar">
        <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link active">
                <div>
                  <i className="bx bx-search-alt-2"></i>
                </div>
                <span>Recherche</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="bx bx-user-plus"></i>
                </div>
                <span>Nouve enfant</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="bx bxs-user"></i>
                </div>
                <span>Utilisateur</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="bx bx-line-chart"></i>
                </div>
                <span>Rapport</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-bug"></i>
                </div>
                <span>Paramettre</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-chart-line"></i>
                </div>
                <span>Apropos</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-book-open"></i>
                </div>
                <span>Pellentesque</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-adjust"></i>
                </div>
                <span>Morbi</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fab fa-algolia"></i>
                </div>
                <span>Praesent</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-audio-description"></i>
                </div>
                <span>Pellentesque</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

   
      <div className="wrapper">
        <div className="user_main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="table-wrapper">
                  <table className="fl-table">
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Post Nom</th>
                        <th>Prenom</th>
                        <th>Enfants au centre</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                      <tr>
                        <td>Muteba</td>
                        <td>Buhendwa</td>
                        <td>Randy</td>
                        <td>5 enfants</td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          
             
              <div className="col-sm-6 save-child">
                <div className="form-title">
                  <h3>Informations sur l'accompagnant</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}
                  <div className="form-main">
                  
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sexe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telephone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>
            </div>


            
            </div>
          </div>
        </div>
       
        

 

      
    </>
  );
};
export default KeshoParents;
