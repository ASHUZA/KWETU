import React, { Component } from "react";

export class Confirm extends Component {
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
        <div className="form-container-confirm">
          <div className="form-title1">
            <h3>Cofirmation</h3>
            
          </div>
          <div className="form-group-main">


          <div class="container">
  <div class="row form-container">
    <div class="col-sm confirm-box">
    <div className="form-title">
            <h3>Accompagnant</h3>
            <i className="fas fa-ellipsis-h"></i>
          </div>
    <ul class="list-group">
              <li class="list-group-item">Name: {nom_tut}</li>
              <li class="list-group-item">Prenom: {prenom_tut}</li>
              <li class="list-group-item">Telephone: {phone_tut}</li>
              <li class="list-group-item">Sexe: {sexe_tut}</li>
           
            </ul>
    </div>
    <div class="col-sm confirm-box">
    <div className="form-title">
            <h3>Père</h3>
            <i className="fas fa-ellipsis-h"></i>
          </div>
    <ul class="list-group">
              <li class="list-group-item">Name: {nom_pere}</li>
              <li class="list-group-item">Prenom: {prenom_pere}</li>
              <li class="list-group-item">Telephone: {phone_pere}</li>
              <li class="list-group-item">Sexe: {sexe_pere}</li>
            
            </ul>
    </div>
    <div class="col-sm confirm-box">
    <div className="form-title">
            <h3>Mère</h3>
            <i className="fas fa-ellipsis-h"></i>
          </div>
    <ul class="list-group">
              <li class="list-group-item">Name: {nom_mere}</li>
              <li class="list-group-item">Prenom: {prenom_mere}</li>
              <li class="list-group-item">Telephone: {phone_mere}</li>
              <li class="list-group-item">Sexe: {sexe_mere}</li>
           
            </ul>
    </div>
  </div>
</div>

          

            <br />
            <br />

            <div className="row">
            <div className="d-flex align-items-center">
                 
              <div className="col-6 footer-form">
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

export default Confirm;
