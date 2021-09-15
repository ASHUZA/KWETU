import React, { Component } from 'react'

export class ParentFather extends Component {
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
            <div className="form-container">
                <h1 className="mb-5">Père de l'enfant</h1>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control" name="nom" onChange={inputChange('nom_pere')} value={values.nom_pere} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Prenom</label>
                    <input type="email" className="form-control" name="prenom" onChange={inputChange('prenom_pere')} value={values.prenom_pere} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telephone</label>
                    <input type="tel" className="form-control" name="phone" onChange={inputChange('phone_pere')} value={values.phone_pere} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Sexe</label>
                    <input type="text" className="form-control" name="sexe" onChange={inputChange('sexe_pere')} value={values.sexe_pere} />
                </div>

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParentFather
