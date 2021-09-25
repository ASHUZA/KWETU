import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Success extends Component {
    render() {
        return (
            <div className="col-sm-12 succes-container d-flex justify-content-center align-items-center">
            <div className="col-sm-5 d-flex justify-content-center align-items-center flex-column">
                <h1 className="succes-text">Enfant ajouté avec succès!</h1>
                <div className="footer-succes">
                <Link className="btn-validate" to="/KeshoChildFollow">
                    <button className="btn" >fiche hebdomadaire</button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Success
