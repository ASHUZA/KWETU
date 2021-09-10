import react from "react";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
import user_img from "../images/user_img.png";
import PageSearch2 from "./PageSearch2";
const PageHome2 = () => {
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

      {/* PARTIE GENERAL */}



<PageSearch2/>
      <div className="wrapper">
        <div className="user_main">
         

         
          <div className="container">
            <div className="row">
            <div className="col-sm-6">
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}
               
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
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-3">
                
              <form className="form-horizontal user-form">
                  {/* <h3 className="title">Basic information</h3> */}
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

                  <div className="form-group">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>

              <div className="col-sm-3">
                <form className="form-horizontal user-form">
                  {/* <h3 className="title">Basic information</h3> */}
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

                  <div className="form-group">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-primary">
              <p>
                <i className="fas fa-tasks"></i>
              </p>
              <h3>100+</h3>
              <p>To do</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-warning">
              <p>
                <i className="fas fa-spinner"></i>
              </p>
              <h3>100+</h3>
              <p>In progress</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-success">
              <p>
                <i className="fas fa-check-circle"></i>
              </p>
              <h3>100+</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="col-3 col-m-6 col-sm-6">
            <div className="counter bg-danger">
              <p>
                <i className="fas fa-bug"></i>
              </p>
              <h3>100+</h3>
              <p>Issues</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-m-12 col-sm-12 ">
            <div className="card list_card">
              <div className="card-header">
                <h3>Table</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="card-content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project</th>
                      <th>Manager</th>
                      <th>Status</th>
                      <th>Due date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>React</td>
                      <td>Tran Anh Tuat</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success"></i>
                          Completed
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Vue</td>
                      <td>Bui Nhu Sang</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning"></i>
                          In progress
                        </span>
                      </td>
                      <td>18/07/2020</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Laravel</td>
                      <td>Phan Nhat Truong</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning"></i>
                          In progress
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Django</td>
                      <td>Le Anh Tuan</td>
                      <td>
                        <span className="dot">
                          <i className="bg-danger"></i>
                          Delayed
                        </span>
                      </td>
                      <td>07/07/2020</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>MEAN</td>
                      <td>John Evan</td>
                      <td>
                        <span className="dot">
                          <i className="bg-primary"></i>
                          Pending
                        </span>
                      </td>
                      <td>20/08/2020</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>MERN</td>
                      <td>Robert</td>
                      <td>
                        <span className="dot">
                          <i className="bg-primary"></i>
                          Pending
                        </span>
                      </td>
                      <td>20/08/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>Progress bar</h3>

                <h3>Progress bar</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="card-content">
                <div className="progress-wrapper">
                  <p>
                    Less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    1 - 3 hours
                    <span className="float-right">60%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-primary" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    More than 3 hours
                    <span className="float-right">40%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-warning" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    More than 6 hours
                    <span className="float-right">20%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-danger" style={{ width: "20%" }}>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>Chartjs</h3>
              </div>
              <div className="card-content">
                <canvas id="myChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div className="row">
          <div className="col-8 col-m-12 col-sm-12 list_card">
            <div className="card">
              <div className="card-header">
                <h3>Table</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="card-content">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Project</th>
                      <th>Manager</th>
                      <th>Status</th>
                      <th>Due date</th>
                      <th>Due date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>React</td>
                      <td>Tran Anh Tuat</td>
                      <td>
                        <span className="dot">
                          <i className="bg-success"></i>
                          Completed
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Vue</td>
                      <td>Bui Nhu Sang</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning"></i>
                          In progress
                        </span>
                      </td>
                      <td>18/07/2020</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Laravel</td>
                      <td>Phan Nhat Truong</td>
                      <td>
                        <span className="dot">
                          <i className="bg-warning"></i>
                          In progress
                        </span>
                      </td>
                      <td>17/07/2020</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Django</td>
                      <td>Le Anh Tuan</td>
                      <td>
                        <span className="dot">
                          <i className="bg-danger"></i>
                          Delayed
                        </span>
                      </td>
                      <td>07/07/2020</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>MEAN</td>
                      <td>John Evan</td>
                      <td>
                        <span className="dot">
                          <i className="bg-primary"></i>
                          Pending
                        </span>
                      </td>
                      <td>20/08/2020</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>MEAN</td>
                      <td>John Evan</td>
                      <td>
                        <span className="dot">
                          <i className="bg-primary"></i>
                          Pending
                        </span>
                      </td>
                      <td>20/08/2020</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>MERN</td>
                      <td>Robert</td>
                      <td>
                        <span className="dot">
                          <i className="bg-primary"></i>
                          Pending
                        </span>
                      </td>
                      <td>20/08/2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4 col-m-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h3>Progress bar</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="card-content">
                <div className="progress-wrapper">
                  <p>
                    Less than 1 hour
                    <span className="float-right">50%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-success" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    1 - 3 hours
                    <span className="float-right">60%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-primary" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    More than 3 hours
                    <span className="float-right">40%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-warning" style={{ width: "40%" }}></div>
                  </div>
                </div>
                <div className="progress-wrapper">
                  <p>
                    More than 6 hours
                    <span className="float-right">20%</span>
                  </p>
                  <div className="progress">
                    <div className="bg-danger" style={{ width: "20%" }}>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageHome2;
