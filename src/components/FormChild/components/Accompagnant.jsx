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
        <div className="d-flex">
          <div className="col-sm-12">
            <div className="form-container">
              <div className="form-t">
                <h3>Responsable de l'enfant</h3>
                <i className="fas fa-ellipsis-h"></i>
              </div>

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
                          </div>
                        </div>

                        <br />

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
                  </div>
                </div>


                <div class="col-sm-7">
                  <div className="form-container">
                    <div className="form-title">
                      <h3>Information sur mère</h3>
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


              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Accompagnant;
