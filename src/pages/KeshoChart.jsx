import react from "react";
import "./../scss/PageHome2.scss";
import "./KeshoChart.scss";
import { Link } from "react-router-dom";

import user_img from "../images/user_img.png";
import ClickEvents from "../sections/ClickEvents";
import Navbar from "../components/Navbar";

const KeshoChart = () => {
  return (
    <>
      <div className="homme_main">
        <div className="nav_item nav_burger">
          {/* <div className="nav_icon">
            <li className="nav-item">
              <a className="nav-link">
                <i className="fas fa-bars" onclick="collapseSidebar()"></i>
              </a>
            </li>
          </div> */}
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

      <div className="wrapper">
        <div className="container">
          <div className="col-sm-12 d-flex justify-content-between  chart-info-main">
            <div className="col-sm-2 d-flex flex-column align-items-center justify-content-center chart-info">
              <h3>MAS</h3>
              <p>250 Enfants</p>
            </div>
            <div className="col-sm-2 d-flex flex-column align-items-center justify-content-center chart-info">
              <h3>MAS</h3>
              <p>250 Enfants</p>
            </div>
            <div className="col-sm-2 d-flex flex-column align-items-center justify-content-center chart-info">
              <h3>MAS</h3>
              <p>250 Enfants</p>
            </div>
            <div className="col-sm-2 d-flex flex-column align-items-center justify-content-center chart-info">
              <h3>MAS</h3>
              <p>250 Enfants</p>
            </div>
            <div className="col-sm-2 d-flex flex-column align-items-center justify-content-center chart-info">
            <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Annee"
                    />
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mois"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jour"
                    />
                  </div> */}
                  
            </div>
          </div>
      <div className="col-sm-12 mt-5 d-flex justify-content-between">
            <div className="col-sm-6">
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
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
                      <td>Content 10</td>
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
            <div className="col-sm-6 d-flex flex-column align-items-start justify-content-start chart-box">
            <div className="row">
              <div className="col-sm-12 chart-box-item">
                <ClickEvents></ClickEvents>
              </div>
              <div className="col-sm-12 chart-box-item">
                 <ClickEvents></ClickEvents> 
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default KeshoChart;
