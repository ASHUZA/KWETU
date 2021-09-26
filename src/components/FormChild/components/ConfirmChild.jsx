import React, { Component } from "react";
import img_child from "./../../../images/enfant2.jpg";
export class ConfirmChild extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        nom_tut,
        prenom_tut,
        phone_tut,
        sexe_tut,

        nom_pere,
        prenom_pere,
        phone_pere,
        sexe_pere,
        nom_mere,
        prenom_mere,
        phone_mere,
        sexe_mere,
      },
    } = this.props;

    return (
      <>


        <div className="row">
          <div className="col-sm-2 detail-profil">
            <div className="col-sm-12 detail-img">
              <div className="form-add-child">
                <div className="child-img">
                  <img src={img_child} alt="image de l'enfant" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 detail-vaccin">
              <div className="detail-item">
                <div class="confirm-box">
                  <div className="form-title">
                    <h3>Vaccination</h3>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <ul class="list-group">
                        <li class="detail-vaccin-item">
                          <p>A la naissance</p>{" "}
                          <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="switch" />
                          </label>
                        </li>
                        <li class="detail-vaccin-item">
                          <p>6 semaines (1.5 mois)</p>{" "}
                          <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="switch" />
                          </label>
                        </li>
                        <li class="detail-vaccin-item">
                          <p>10 Semaines (2.5 mois</p>
                          <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="switch" />
                          </label>
                        </li>
                        <li class="detail-vaccin-item">
                          <p>14 Semaines (3.5 mois)</p>
                          <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="switch" />
                          </label>
                        </li>
                        <li class="detail-vaccin-item">
                          <p>9 moiss</p>
                          <label className="toggle-switch">
                            <input type="checkbox" />
                            <span className="switch" />
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 detail-main d-flex justify-content-between flex-wrap">
            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Profil de l'enfant</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Nom: </li>
                      <li class="list-item-detail">Prenom: </li>
                      <li class="list-item-detail">Postnom: </li>
                      <li class="list-item-detail">Sexe:</li>
                      <li class="list-item-detail">Date de naissance::</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Groupe de consulation: </li>
                      <li class="list-item-detail">Adresse: </li>
                      <li class="list-item-detail">Provenance: </li>
                      <li class="list-item-detail">Mode d'arrivé:</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Information sanitaire</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Lieu d'accouchement: </li>
                      <li class="list-item-detail">terme grossesse: </li>
                      <li class="list-item-detail">Sejour en NEONAT:: </li>
                      <li class="list-item-detail">EIG Moyen (Année):</li>
                      <li class="list-item-detail">Asphixie périnnatale:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Poids à la naissance: </li>
                      <li class="list-item-detail">
                        Allaitement maternel exclusif:{" "}
                      </li>
                      <li class="list-item-detail">
                        Constitution alimentaire:{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Accompagnant</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Nom: </li>
                      <li class="list-item-detail">Prenom: </li>
                      <li class="list-item-detail">Telephone: </li>
                      <li class="list-item-detail">Sexe:</li>
                      <li class="list-item-detail">Taille (cm):</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Poids (Kg): </li>
                      <li class="list-item-detail">Tour de taille: </li>
                      <li class="list-item-detail">Périmetre brachial: </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Mère de l'enfant</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Nom: </li>
                      <li class="list-item-detail">Prenom: </li>
                      <li class="list-item-detail">Telephone: </li>
                      <li class="list-item-detail">En vie:</li>
                      <li class="list-item-detail">Etat maternel:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Scolarité: </li>
                      <li class="list-item-detail">Profession: </li>
                      <li class="list-item-detail">Statut marital: </li>
                      <li class="list-item-detail">Si mariées, régime:</li>
                      <li class="list-item-detail">Contraception:</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Informations sur la fratrie</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Tribu: </li>
                      <li class="list-item-detail">Niveau socio-eco: </li>
                      <li class="list-item-detail">Taille du ménage: </li>
                      <li class="list-item-detail">Prossessio télé/radio:</li>
                      <li class="list-item-detail">Taille de la fratrie:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">MAs dans la fratrie: </li>
                      <li class="list-item-detail">
                        Rougeole dans la fratrie:{" "}
                      </li>
                      <li class="list-item-detail">
                        ATCD TBC dans la fratrie:{" "}
                      </li>
                      <li class="list-item-detail">TBC parents:</li>
                      <li class="list-item-detail">Consommation poisson:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Religion: </li>
                      <li class="list-item-detail">Prise récente ATB: </li>
                      <li class="list-item-detail">TBC Declaré guerie: </li>
                      <li class="list-item-detail">Terrain VIH:</li>
                      <li class="list-item-detail">Hospitalisation récente:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">
                        Durée utilisation coktail(jour):{" "}
                      </li>
                      <li class="list-item-detail">Nombre repas par jour: </li>
                      <li class="list-item-detail">
                        Usage produit des plantes:{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 detail-item">
              <div class="col-sm confirm-box">
                <div className="form-title">
                  <h3>Père</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Nom: </li>
                      <li class="list-item-detail">Prenom: </li>
                      <li class="list-item-detail">Telephone: </li>
                      <li class="list-item-detail">Sexe:</li>
                      <li class="list-item-detail">En vie:</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Scolarité: </li>
                      <li class="list-item-detail">Profession: </li>
                      <li class="list-item-detail">Nombre de femmes: </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
          <div className="form-new-child-button">
            <div className="row">
              <div className="d-flex align-items-center">
                <div className="col-6 footer-form">
                  <button className="btn" onClick={this.back}>
                    Back
                  </button>
                </div>

                <div className="col-6 footer-form text-right">
                  <button className="btn" onClick={this.continue}>
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div>
  
      </>
    );
  }
}

export default ConfirmChild;
