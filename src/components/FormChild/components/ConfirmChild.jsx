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
        id,
        name,
        lastname,
        firstname,
        gender,
        birthday,
        address,
        term_pregnancy,
        birth_weight,
        hearth_place_birth,
        maternity_stay,
        birth_asphyxia,
        dpm,
        eig_average_per_year,
        breastfeeding_exclusive_duration,
        food_diversified_composition,
        measles_siblings_antecedents,
        mas_relapse_number,
        mas_in_siblings,
        arrival_date,
        siblings_number,
        child_position_siblings,
        polygamous_family,
        manage_size,
        mother_alive,
        father_alive,
        live_with_parents,
        profil_picture_link,
        father_s_wives,
        radio_or_television,
        meal_number_per_day,
        fishes_uptake,
        atb_uptaken,
        vih_area,
        siblings_tbc_antecedents,
        tbc_child_suffer,
        parents_tbc_antecedents,
        tbc_medicate,
        tbc_treatment_duration,
        tbc_cured,
        current_hospital_diagno,
        medecinal_plants_duration_used,
        machange_cocktail_duration_used,
        visit_day,
        provenance_place,
        arrival_mode,
        tribe,
        religion,
        malnutrition_type,
        father,
        mother,
        tutor,
        occupation,
        mother_condition,
        socio_level,
        study_level,
        contraception,
        child_state,
        immunization_schedule,
        marital_status,
        manager_heigth,
        manager_weight,
        manager_waistline,
        manager_brachial_perimeter,
        mother_occupation,
        father_occupation,

        
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
                      <li class="list-item-detail">Nom: {name} </li>
                      <li class="list-item-detail">Prenom: {firstname} </li>
                      <li class="list-item-detail">Postnom: {lastname} </li>
                      <li class="list-item-detail">Sexe: {gender} </li>
                      <li class="list-item-detail">Date de naissance: {birthday}</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      {/* <li class="list-item-detail">Groupe de consulation: {name} </li> */}
                      <li class="list-item-detail">Lieu naissance: {hearth_place_birth} </li>
                      <li class="list-item-detail">Adresse: {address} </li>
                      <li class="list-item-detail">Provenance: {provenance_place} </li>
                      <li class="list-item-detail">Mode d'arrivé:  {arrival_mode}</li>
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
                      {/* <li class="list-item-detail">Lieu d'accouchement: {name} </li> */}
                      <li class="list-item-detail">terme grossesse: { term_pregnancy} </li>
                      <li class="list-item-detail">Sejour en NEONAT: {maternity_stay} </li>
                      <li class="list-item-detail">EIG Moyen (Année):  {eig_average_per_year}</li>
                      <li class="list-item-detail">Asphixie périnnatale: {birth_asphyxia}</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Poids à la naissance: {birth_weight} </li>
                      <li class="list-item-detail">
                        Allaitement maternel exclusif: {breastfeeding_exclusive_duration}
                      </li>
                      <li class="list-item-detail">
                        {/* Constitution alimentaire:{" "} */}
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
                      {/* <li class="list-item-detail">Nom: {name} </li>
                      <li class="list-item-detail">Prenom: {name} </li>
                      <li class="list-item-detail">Telephone: {name} </li> */}
                      {/* <li class="list-item-detail">Sexe:</li> */}
                      <li class="list-item-detail">Taille (cm): {manager_heigth}</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Poids (Kg): {manager_weight} </li>
                      <li class="list-item-detail">Tour de taille: {manager_waistline} </li>
                      <li class="list-item-detail">Périmetre brachial: {manager_brachial_perimeter} </li>
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
                      {/* <li class="list-item-detail">Nom: {name} </li>
                      <li class="list-item-detail">Prenom: {name} </li>
                      <li class="list-item-detail">Telephone: {name} </li> */}
                      <li class="list-item-detail">En vie: {mother_alive} </li>
                      <li class="list-item-detail">Etat maternel: {mother_condition} </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Scolarité: {name} </li>
                      <li class="list-item-detail">Profession: {mother_occupation} </li>
                      <li class="list-item-detail">Statut marital: {marital_status} </li>
                      {/* <li class="list-item-detail">Si mariées, régime: {marital_status}</li> */}
                      <li class="list-item-detail">Contraception: {contraception} </li>
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
                      <li class="list-item-detail">Tribu: {tribe} </li>
                      <li class="list-item-detail">Niveau socio-eco: {socio_level} </li>
                      <li class="list-item-detail">Taille du ménage: {manage_size} </li>
                      <li class="list-item-detail">Prossessio télé/radio: {radio_or_television} </li>
                      {/* <li class="list-item-detail">Taille de la fratrie:</li> */}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">MAs dans la fratrie: {mas_in_siblings} </li>
                      <li class="list-item-detail">
                        Rougeole dans la fratrie:{measles_siblings_antecedents}
                      </li>
                      <li class="list-item-detail">
                        ATCD TBC dans la fratrie:{siblings_tbc_antecedents}
                      </li>
                      <li class="list-item-detail">TBC parents: {parents_tbc_antecedents} </li>
                      <li class="list-item-detail">Consommation poisson: {fishes_uptake} </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Religion: {religion} </li>
                      <li class="list-item-detail">Prise récente ATB: {atb_uptaken} </li>
                      <li class="list-item-detail">TBC Declaré guerie: {tbc_medicate} </li>
                      <li class="list-item-detail">Terrain VIH: {vih_area} </li>
                      <li class="list-item-detail">Hospitalisation récente: {current_hospital_diagno} </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">
                        {/* Durée utilisation coktail(jour):{" "} */}
                      </li>
                      <li class="list-item-detail">Nombre repas par jour: {meal_number_per_day} </li>
                      <li class="list-item-detail">
                        Usage produit des plantes:{medecinal_plants_duration_used}
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
                      {/* <li class="list-item-detail">Nom: {name} </li>
                      <li class="list-item-detail">Prenom: {name} </li>
                      <li class="list-item-detail">Telephone: {name} </li>
                      <li class="list-item-detail">Sexe:</li> */}
                      <li class="list-item-detail">En vie: {father_alive} </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul class="list-group">
                      <li class="list-item-detail">Scolarité: {name} </li>
                      <li class="list-item-detail">Profession: {father_occupation} </li>
                      <li class="list-item-detail">Nombre de femmes: {father_s_wives} </li>
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
