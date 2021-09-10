import react from "react";
import "./../scss/PageSearch2.scss";
import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
import user_img from "../images/user_img.png";
const PageSearch2 = () => {
  return (
    <>
      {/* PARTIE GENERAL */}

      <div className="wrapper">
        <div className="user_main">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="table-wrapper">
                  <table className="fl-table">
                    <thead>
                      <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                        <th>Header 4</th>
                        <th>Header 5</th>
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
        </div>
        

      
    </>
  );
};
export default PageSearch2;
