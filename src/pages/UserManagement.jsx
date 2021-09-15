import react from "react";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";
import user_img from "../images/user_img.png";
import SectionStep from "./SectionStep";
import PageSearch2 from "./PageSearch2";
const UserManagement = () => {
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
        <div className="user_main d-flex justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="table-wrapper">
                  <table className="fl-table">
                    <thead>
                      <tr>
                        <th>Prenom</th>
                        <th>Nom</th>
                        <th>Sexe</th>
                        <th>Poste</th>
                        <th>Type compte</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Content 1</td>
                        <td>Content 1</td>
                        <td>Content 1</td>
                        <td>Content 1</td>
                        <td>Content 1</td>
                      </tr>
                      <tr>
                        <td>Content 2</td>
                        <td>Content 2</td>
                        <td>Content 2</td>
                        <td>Content 2</td>
                        <td>Content 2</td>
                      </tr>
                      <tr>
                        <td>Content 3</td>
                        <td>Content 3</td>
                        <td>Content 3</td>
                        <td>Content 3</td>
                        <td>Content 3</td>
                      </tr>
                      <tr>
                        <td>Content 4</td>
                        <td>Content 4</td>
                        <td>Content 4</td>
                        <td>Content 4</td>
                        <td>Content 4</td>
                      </tr>
                      <tr>
                        <td>Content 5</td>
                        <td>Content 5</td>
                        <td>Content 5</td>
                        <td>Content 5</td>
                        <td>Content 5</td>
                      </tr>
                      <tr>
                        <td>Content 6</td>
                        <td>Content 6</td>
                        <td>Content 6</td>
                        <td>Content 6</td>
                        <td>Content 6</td>
                      </tr>
                      <tr>
                        <td>Content 7</td>
                        <td>Content 7</td>
                        <td>Content 7</td>
                        <td>Content 7</td>
                        <td>Content 7</td>
                      </tr>
                      <tr>
                        <td>Content 8</td>
                        <td>Content 8</td>
                        <td>Content 8</td>
                        <td>Content 8</td>
                        <td>Content 8</td>
                      </tr>
                      <tr>
                        <td>Content 9</td>
                        <td>Content 9</td>
                        <td>Content 9</td>
                        <td>Content 9</td>
                        <td>Content 9</td>
                      </tr>
                      <tr>
                        <td>Content 10</td>
                        <td>Content 10</td>
                        <td>Content 10</td>
                        <td>Content 10</td>
                        <td>Content 10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-sm-3 form-user">
                <div className="form-title">
                  <h3>Compte utilisateur</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="form-horizontal user-form">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-main form-main-user">
                    <div className="user-img">
                      <img
                        src={user_img}
                        alt="User image"
                        className="img"
                        data-toggle="user-menu"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Post nom"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Prenom"
                      />
                    </div>
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
                  </div>
                  <div className="form-footer-user">
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
export default UserManagement;
