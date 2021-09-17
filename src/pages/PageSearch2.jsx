import react from "react";
import "./../scss/PageSearch2.scss";
import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
import user_img from "../images/user_img.png";
import { MDBInput } from "mdbreact";
const PageSearch2 = () => {
  return (
    <>
      {/* PARTIE GENERAL */}

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
                    <div className="form form112">
    <input type="text" id="email" className="form__input" autocomplete="off" placeholder=" "/>
    <label for="email" className="form__label">Email</label>
  </div>

  <div className="App h-screen flex justify-center items-center bg-black">
      <label className='relative cursor-pointer'>
        <input type="text" placeholder="Input" className='h-20 w-96 px-6 text-4xl text-black bg-black border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
        <span className='text-4xl text-white text-opacity-80 bg-black absolute left-5 top-5 px-1 transition duration-200 input-text'>Input</span>
      </label>
    </div>

                    <MDBInput label="Example label" outline size="sm" />
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

          <div className="container">
            <div className="row">
              <div className="col-sm-9 form-user">
                <div className="form-title">
                  <h3>Mon compte utilisateur</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="form-horizontal-user">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <div className="col-sm-4">
                      <div className="user-img">
                        <img
                          src={user_img}
                          alt="User image"
                          className="img"
                          data-toggle="user-menu"
                        />
                      </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-wrap mt-3 user-input-main">
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
                  </div>
                  <div className="form-footer-user">
                    <button className="btn signup">Enregister</button>
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
