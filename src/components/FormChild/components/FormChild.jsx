import React, { Component } from "react";
import Confirm, { ConfirmChild } from "./ConfirmChild";
import Success from "./Success";
import "./Form.scss";
import Identite from "./Identite";
import Sanitaire from "./Sanitaire";
import Vaccination from "./Vaccination";
import Accompagnant from "./Accompagnant";
import Famille from "./Famille";

export class FormChild extends Component {
  state = {
    step: 1,

    id: "",
    name: "",
    lastname: "",
    firstname: "",
    gender: "",
    birthday: "",
    address: "",
    term_pregnancy: "",
    birth_weight: "",
    hearth_place_birth: "",
    maternity_stay: "",
    birth_asphyxia: "",
    dpm: "",
    eig_average_per_year: "",
    breastfeeding_exclusive_duration: "",
    food_diversified_composition: "",
    measles_siblings_antecedents: "",
    mas_relapse_number: "",
    mas_in_siblings: "",
    arrival_date: "",
    siblings_number: "",
    child_position_siblings: "",
    polygamous_family: "",
    manage_size: "",
    mother_alive: "",
    father_alive: "",
    live_with_parents: "",
    profil_picture_link: "",
    father_s_wives: "",
    radio_or_television: "",
    meal_number_per_day: "",
    fishes_uptake: "",
    atb_uptaken: "",
    vih_area: "",
    siblings_tbc_antecedents: "",
    tbc_child_suffer: "",
    parents_tbc_antecedents: "",
    tbc_medicate: "",
    tbc_treatment_duration: "",
    tbc_cured: "",
    current_hospital_diagno: "",
    medecinal_plants_duration_used: "",
    machange_cocktail_duration_used: "",
    visit_day: "",
    provenance_place: "",
    arrival_mode: "",
    tribe: "",
    religion: "",
    malnutrition_type: "",
    father: "",
    mother: "",
    tutor: "",
    occupation: "",
    mother_condition: "",
    socio_level: "",
    study_level: "",
    contraception: "",
    child_state: "",
    immunization_schedule: "",
    marital_status: "",
    marital_status: "",
    manager_heigth: "",
    manager_weight: "",
    manager_waistline: "",
    manager_brachial_perimeter: "",
    mother_occupation: "",
    father_occupation: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const {
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

    } = this.state;
    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <Identite
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );

      case 2:
        return (
          <Accompagnant
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <Famille
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 4:
        return (
          <ConfirmChild
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default FormChild;
