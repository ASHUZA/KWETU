import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Accompagnant de l'enfant</h1>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control" name="nom" onChange={inputChange('nom_tut')} value={values.nom_tut} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Prenom</label>
                    <input type="email" className="form-control" name="prenom" onChange={inputChange('prenom_tut')} value={values.prenom_tut} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telephone</label>
                    <input type="tel" className="form-control" name="phone" onChange={inputChange('phone_tut')} value={values.phone_tut} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Sexe</label>
                    <input type="text" className="form-control" name="sexe" onChange={inputChange('sexe_tut')} value={values.sexe_tut} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </div>
        )
    }
}

export default AccountSetup
