import react from "react";

import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
import user_img from "../images/user_img.png";
const AddParents = () => {
  return (
    <>
      {/* PARTIE GENERAL */}

      <div className="wrapper">
        <div className="user_main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
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
              <div className="col-sm-6 parrents-box">
              <div className="col-sm-3">
                <form className="parrents-table">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-title">
                 <h3>MERE</h3>
                 <i className="fas fa-ellipsis-h"></i>
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
                      type="text"
                      className="form-control"
                      placeholder="Telephone"
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
                      placeholder="Mot de passe"
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn signup">Enregister</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-3">
                <form className="parrents-table">
                  {/* <h3 className="title">Basic information</h3> */}
                
                  <div className="form-title">
                 <h3>PERE</h3>
                 <i className="fas fa-ellipsis-h"></i>
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
                      placeholder="Telephone"
                    />
                  </div>
               
                  <div className="form-group">
                    <button className="btn signup">Enregister</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-3">
                <form className="form-horizontal parrents-table">
                  {/* <h3 className="title">Basic information</h3> */}
               
                  <div className="form-title">
                 <h3>TUTAIRE</h3>
                 <i className="fas fa-ellipsis-h"></i>
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
                      placeholder="Telephone"
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
                      placeholder="Telephone"
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn signup">Enregister</button>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        

      
    </>
  );
};
export default AddParents;
