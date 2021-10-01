import React, { Component } from "react";

export class Accompagnant extends Component {
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
            <div className="col-sm-12">
              <div className="form-container">
                <div class="row">
                  <div className="row">
                    <div class="col-sm-7">
                      <div className="form-container">
                        <div className="form-title">
                          <h3>Accompagant de l'enfant</h3>
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="form-group-main">
                          <div class="row form-add-child">
                            <div class="accompagnant-form col-sm d-flex flex-wrap justify-content-start">
                              <div className="form-group">
                                <label htmlFor="name">Nom</label>

                                <input
                                  type="email"
                                  className="form-control"
                                  name="prenom"
                                  onChange={inputChange("prenom_tut")}
                                  value={values.prenom_tut}
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
                                <label htmlFor="phone">Sexe</label>
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
                                <label htmlFor="password">Taille (cm)</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="sexe"
                                  onChange={inputChange("manager_heigth")}
                                  value={values.manager_heigth}
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="name">Poids (Kg)</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="nom"
                                  onChange={inputChange("manager_weight")}
                                  value={values.manager_weight}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Tour de taille</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="prenom"
                                  onChange={inputChange("manager_waistline")}
                                  value={values.manager_waistline}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="phone">
                                  Périmetre brachial
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  name="phone"
                                  onChange={inputChange(
                                    "manager_brachial_perimeter"
                                  )}
                                  value={values.manager_brachial_perimeter}
                                />
                              </div>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-5">
                      <div className="form-container">
                        <div className="form-title">
                          <h3>Pere de l'enfant</h3>
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
                                <label htmlFor="phone">En vie</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  value={values.father_alive}
                                  onChange={inputChange("father_alive")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">Scolarité</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  value={values.father_s_wives}
                                  onChange={inputChange("father_s_wives")}
                                >
                                  <option value="1 femme">1 femme</option>
                                  <option value="2 femmes" selected>
                                    2 femmes
                                  </option>
                                  <option value="3 femmes">3 femmes</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label htmlFor="name">Profession</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  value={values.father_occupation}
                                  onChange={inputChange("father_occupation")}
                                >
                                  <option value="Travaleur">Travaleur</option>
                                  <option value="Danseur" selected>
                                    Danseur
                                  </option>
                                  <option value="Nageur">Nageur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-7">
                      <div className="form-container">
                        <div className="form-title">
                          <h3>Information sur mère</h3>
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="form-group-main">
                          <div class="row form-add-child">
                            <div class="accompagnant-form-mother col-sm d-flex flex-wrap justify-content-start">
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
                                <label htmlFor="email">Sexe</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
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
                                <label htmlFor="phone">Etat maternel</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">Scolarité</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="sexe"
                                  onChange={inputChange("sexe_tut")}
                                  value={values.sexe_tut}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">Profession</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">Statut marital</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">
                                  Si mariées, régime
                                </label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">
                                  Nombre de femmes
                                </label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="password">Contraception</label>
                                <select
                                  id="monselect"
                                  className="form-control"
                                  onChange={inputChange("nom_tut")}
                                >
                                  <option value="valeur1">Valeur 1</option>
                                  <option value="valeur2" selected>
                                    Valeur 2
                                  </option>
                                  <option value="valeur3">Valeur 3</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Accompagnant;
