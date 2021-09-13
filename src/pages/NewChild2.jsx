import react from "react";
import { MDBInput } from "mdbreact";

import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
import user_img from "../images/user_img.png";
const NewChild2 = () => {
  return (
    <>
      {/* PARTIE GENERAL */}

      <div className="wrapper">
        <div className="user_main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 save-child">
                <div className="form-title">
                  <h3>Informations sur la fratrie</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}
                  <div className="form-main">
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
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>

              <div className="col-sm-6 save-child">
                <div className="form-title">
                  <h3>Informations sur la mère</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}
                  <div className="form-main">
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

                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>



              <div className="col-sm-6 save-child">
                <div className="form-title">
                  <h3>Informations sur le père</h3>
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

                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>



              <div className="col-sm-6 save-child">
                <div className="form-title">
                  <h3>Informations sanitaire</h3>
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
export default NewChild2;
