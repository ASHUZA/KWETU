import React, { Component } from 'react';
import Confirm, { ConfirmChild } from './ConfirmChild';
import Success from './Success';
import "./Form.scss"
import Identite from './Identite';
import Sanitaire from './Sanitaire';
import Vaccination from './Vaccination';
import Accompagnant from './Accompagnant';
import Famille from './Famille';
import img_child from "./../../../images/enfant2.jpg";

export class FormChild extends Component {
    state = {
        step: 1,
        nom_tut: '',
        prenom_tut: '',
        phone_tut: '',
        sexe_tut: '',
        
        nom_pere: '',
        prenom_pere: '',
        phone_pere: '',
        sexe_pere: '',

        nom_mere: '',
        prenom_mere: '',
        phone_mere: '',
        sexe_mere: '',

        
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { nom_tut, prenom_tut, phone_tut, sexe_tut, nom_pere, prenom_pere, phone_pere, sexe_pere, nom_mere, prenom_mere, phone_mere, sexe_mere  } = this.state;
        const values = {nom_tut, prenom_tut, phone_tut, sexe_tut, nom_pere, prenom_pere, phone_pere, sexe_pere, nom_mere, prenom_mere, phone_mere, sexe_mere };

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
                return (
                    <Success />
                );
        }
    }
}

export default FormChild
