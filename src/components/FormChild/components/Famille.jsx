import React, { Component } from "react";

export class Famille extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, inputChange } = this.props;

    return (
      <>
      <div className="form-new-child">
        <div className="d-flex">
          <div className="col-sm-7">
            <div className="form-container">
              <div className="form-title">
                <h3>Information Famille</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="form-group-main">
                <div class="row form-add-child">
                  <div class="col-sm d-flex flex-wrap justify-content-between">
                    <div className="form-group">
                      <label htmlFor="name">Tribu</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Niveau socio-eco</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Taille du ménage</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Prossessio télé/radio</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Taille de la fratrie</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">MAs dans la fratrie</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Rougeole dans la fratrie</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">ATCD TBC dans la fratrie</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">TBC parents</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Consommation poisson</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Religion</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Prise récente ATB</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
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
                {/* <h3>Information Famille (Suite)</h3> */}
                <br />
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="form-group-main">
                <div class="row form-add-child">
                  <div class="col-sm d-flex flex-wrap justify-content-between">
                    <div className="form-group">
                      <label htmlFor="name">TBC Declaré guerie</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                 
                    <div className="form-group">
                      <label htmlFor="phone">Terrain VIH</label>
                      <select id="monselect" className="form-control"   onChange={inputChange("nom_tut")}
                                  >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Hospitalisation récente</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                
                    <div className="form-group">
                      <label htmlFor="phone">Durée utilisation coktail(jour)</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        onChange={inputChange("phone_tut")}
                        value={values.phone_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Nombre repas par jour</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        onChange={inputChange("sexe_tut")}
                        value={values.sexe_tut}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Usage produit des plantes</label>
                      <input
                        type="email"
                        className="form-control"
                        name="prenom"
                        onChange={inputChange("prenom_tut")}
                        value={values.prenom_tut}
                      />
                    </div>
                  </div>
                </div>

                <br />

              </div>
            </div>

         
          </div>
        </div>

            <div className="form-new-child-button">
                <div className="row">
                  <div className="d-flex align-items-center">
                    <div className="col-5 footer-form">
                      <button className="btn" onClick={this.back}>
                        Back
                      </button>
                    </div>
                    <div className="col-6 footer-form text-right">
                      <button className="btn" onClick={this.continue}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                </div>
                
        </div>
      </>
    );
  }
}

export default Famille;
