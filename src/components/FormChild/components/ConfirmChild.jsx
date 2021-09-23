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
        <div className="form-new-child">
          <div className="form-container-confirm">
            <div className="form-title1">
              <h3>Cofirmation</h3>
            </div>
            <div className="form-group-main">
              <div class="container">
                <div class="row form-container">
                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Profil enfant</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <div className="form-add-child">
                          <img src={img_child} alt="image de l'enfant" />
                        </div>
                        <li class="list-group-item">Nome: {nom_pere}</li>
                        <li class="list-group-item">Prenom: {prenom_pere}</li>
                        <li class="list-group-item">Postnom: {phone_pere}</li>
                        <li class="list-group-item">Sexe: {sexe_pere}</li>
                        <li class="list-group-item">
                          Date de naissance: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Groupe de consulation: {sexe_pere}
                        </li>
                        <li class="list-group-item">Adresse: {sexe_pere}</li>
                        <li class="list-group-item">Provenance: {sexe_pere}</li>
                        <li class="list-group-item">
                          Mode d'arrivé: {sexe_pere}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Information sanitaire</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">
                          Lieu d'accouchement: {nom_pere}
                        </li>
                        <li class="list-group-item">
                          terme grossesse: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          Sejour en NEONAT: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          EIG Moyen (Année): {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Asphixie périnnatale: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Poids à la naissance: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Allaitement maternel exclusif: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Constitution alimentaire: {sexe_pere}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Informations vaccinale</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Vaccin 1: {nom_pere}</li>
                        <li class="list-group-item">Vaccin 2: {prenom_pere}</li>
                        <li class="list-group-item">Vaccin 3: {phone_pere}</li>
                        <li class="list-group-item">Vaccin 4: {sexe_pere}</li>
                        <li class="list-group-item">Vaccin 5: {sexe_pere}</li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Informations sur la fratrie</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Tribu: {nom_pere}</li>
                        <li class="list-group-item">
                          Niveau socio-eco: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          Taille du ménage: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          Prossessio télé/radio: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Taille de la fratrie: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          MAs dans la fratrie: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          Rougeole dans la fratrie: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          ATCD TBC dans la fratrie: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          TBC parents: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          Consommation poisson: {sexe_pere}
                        </li>
                        <li class="list-group-item">Religion: {prenom_pere}</li>
                        <li class="list-group-item">
                          Prise récente ATB: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          TBC Declaré guerie: {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Terrain VIH: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          Hospitalisation récente: {phone_pere}
                        </li>
                        <li class="list-group-item">
                          Durée utilisation coktail(jour): {sexe_pere}
                        </li>
                        <li class="list-group-item">
                          Nombre repas par jour: {prenom_pere}
                        </li>
                        <li class="list-group-item">
                          Usage produit des plantes: {phone_pere}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Accompagnant</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Nom: {nom_tut}</li>
                        <li class="list-group-item">Prenom: {prenom_tut}</li>
                        <li class="list-group-item">Telephone: {phone_tut}</li>
                        <li class="list-group-item">Sexe: {sexe_tut}</li>
                        <li class="list-group-item">
                          Taille (cm): {prenom_tut}
                        </li>
                        <li class="list-group-item">Poids (Kg): {phone_tut}</li>
                        <li class="list-group-item">
                          Tour de taille: {sexe_tut}
                        </li>
                        <li class="list-group-item">
                          Périmetre brachial: {prenom_tut}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Père</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Nom: {nom_pere}</li>
                        <li class="list-group-item">Prenom: {prenom_pere}</li>
                        <li class="list-group-item">Telephone: {phone_pere}</li>
                        <li class="list-group-item">Sexe: {sexe_pere}</li>
                        <li class="list-group-item">En vie: {phone_pere}</li>
                        <li class="list-group-item">Scolarité: {sexe_pere}</li>
                        <li class="list-group-item">
                          Profession: {phone_pere}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="col-sm confirm-box">
                      <div className="form-title">
                        <h3>Mère</h3>
                        <i className="fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="list-group">
                        <li class="list-group-item">Nom: {nom_mere}</li>
                        <li class="list-group-item">Prenom: {prenom_mere}</li>
                        <li class="list-group-item">Telephone: {phone_mere}</li>
                        <li class="list-group-item">Sexe: {sexe_mere}</li>
                        <li class="list-group-item">
                          Etat maternel: {prenom_mere}
                        </li>
                        <li class="list-group-item">Scolarité: {phone_mere}</li>
                        <li class="list-group-item">Profession: {sexe_mere}</li>
                        <li class="list-group-item">
                          Statut marital: {prenom_mere}
                        </li>
                        <li class="list-group-item">
                          Si mariées, régime: {phone_mere}
                        </li>
                        <li class="list-group-item">
                          Nombre de femmes: {sexe_mere}
                        </li>
                        <li class="list-group-item">
                          Contraception: {prenom_mere}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
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
        </div>
      </>
    );
  }
}

export default ConfirmChild;
