import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import Confirm from './Confirm';
import Success from './Success';
import ParentFather from './ParentFather';
import ParentMather from './ParentMather';
import "./Form.scss"

export class Form extends Component {
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
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
                case 2:
                    return (
                        <ParentFather
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                        />
                        
                    );
            case 3:
                return (
                    <ParentMather
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />

                );
            case 4:
                return (
                    <Confirm
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

export default Form
