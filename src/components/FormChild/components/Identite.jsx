import React, { Component } from "react";
import img_child from "./../../../images/enfant2.jpg";

export class Identite extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <>
        <div className="d-flex">
         
        <div className="col-sm-5">
            <div className="form-container">
              <div className="form-title">
                <h3>Identité de l'enfant</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="form-group-main">
                <div class="row form-add-child">
                  <div class="col-sm d-flex flex-wrap justify-content-between">
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nom"
                        onChange={inputChange("nom_tut")}
                        value={values.nom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Prenom</label>
                      <input
                        type="email"
                        className="form-control"
                        name="prenom"
                        onChange={inputChange("prenom_tut")}
                        value={values.prenom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Sexe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nom"
                        onChange={inputChange("nom_tut")}
                        value={values.nom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Prenom</label>
                      <input
                        type="email"
                        className="form-control"
                        name="prenom"
                        onChange={inputChange("prenom_tut")}
                        value={values.prenom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Sexe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>
                  </div>
                </div>

                <br />

                
              </div>
            </div>
          </div>


          <div className="col-sm-5">
            <div className="form-container">
              <div className="form-title">
                <h3>Informations sanitaire</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="form-group-main">
                <div class="row form-add-child">
                  <div class="col-sm d-flex flex-wrap justify-content-between">
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nom"
                        onChange={inputChange("nom_tut")}
                        value={values.nom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Prenom</label>
                      <input
                        type="email"
                        className="form-control"
                        name="prenom"
                        onChange={inputChange("prenom_tut")}
                        value={values.prenom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Sexe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nom"
                        onChange={inputChange("nom_tut")}
                        value={values.nom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Prenom</label>
                      <input
                        type="email"
                        className="form-control"
                        name="prenom"
                        onChange={inputChange("prenom_tut")}
                        value={values.prenom_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telephone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Sexe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>
                  </div>
                </div>

                <br />

                <div className="text-right footer-form">
                  <button className="btn" onClick={this.continue}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="form-add-child">
            <img src={img_child} alt="image de l'enfant" />
            </div>
             <div className="form-add-child d-flex justify-content-center align-items-center">
           <p>Vaccin 1</p>
           <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
            </div>
            <div className="form-add-child d-flex justify-content-center align-items-center">
           <p>Vaccin 1</p>
           <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
            </div>
            <div className="form-add-child d-flex justify-content-center align-items-center">
           <p>Vaccin 1</p>
           <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
            </div>
            <div className="form-add-child d-flex justify-content-center align-items-center">
           <p>Vaccin 1</p>
           <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
            </div>
            <div className="form-add-child d-flex justify-content-center align-items-center">
           <p>Vaccin 1</p>
           <label className="toggle-switch">
      <input type="checkbox" />
      <span className="switch" />
    </label>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Identite;
