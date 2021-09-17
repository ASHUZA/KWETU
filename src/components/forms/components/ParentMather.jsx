import React, { Component } from 'react'

export class ParentMather extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, inputChange } = this.props;

        return (
            <>
            <div className="d-flex">
            <div className="col-sm-6">
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
            <div className="col-sm-5">
            <div className="form-container">
               <div className="form-title">
              <h3>Mère de l'enfant</h3>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="form-group-main">
                 <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control" name="nom" onChange={inputChange('nom_mere')} value={values.nom_mere} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Prenom</label>
                    <input type="email" className="form-control" name="prenom" onChange={inputChange('prenom_mere')} value={values.prenom_mere} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telephone</label>
                    <input type="tel" className="form-control" name="phone" onChange={inputChange('phone_mere')} value={values.phone_mere} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Sexe</label>
                    <input type="text" className="form-control" name="sexe" onChange={inputChange('sexe_mere')} value={values.sexe_mere} />
                </div>

                <br />

                <div className="row">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="col-6 footer-form">
                        <button className="btn" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 footer-form">
                        <button className="btn" onClick={this.continue}>Continue</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    
    </div>
    </>
        )
    }
}

export default ParentMather
