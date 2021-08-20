///* eslint-disable jsx-a11y/img-redundant-alt */
import react from 'react'
import "../components/Card/Card.css";
import "../components/Input/Input.css";
import "../components/Select/Select.css";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import childPicture from "./../images/photo.svg";
// import Select from "../components/Select/Select";

const ChildIdentity = () => {
  return (
    <div>
      <h3>Identité</h3>
      <Card className="card dashed-card flx fw">
        <Card className="qfw flx flx-wrap">
          <Input
            label="Nom"
            type="text"
            className="label-up hw"
            
          />
          <Input
            label="Postnom"
            type="text"
            className="label-up hw"
            required="required"
          />
          <Input
            label="Prenom"
            type="text"
            className="label-up hw"
            required="required"
          />
          <div className="flx hw">
            <Input
              label="Date de naissance"
              type="date"
              className="label-up hw"
              required="required"
            />
            <div className="label-up hw">
              <label>Sexe</label>
              <select className="select fw">
                <option value="0">---</option>
                <option value="1">MASCULIN</option>
                <option value="2">FEMININ</option>
              </select>
            </div>
          </div>
          <div className="label-up hw">
            <label>Groupe de consultation</label>
            <select className="select fw">
              <option value="0">---</option>
              <option value="1">LUNDI</option>
              <option value="2">MERCREDI</option>
              <option value="2">VENDREDI</option>
            </select>
          </div>
          <Input
            label="Adresse"
            type="text"
            className="label-up hw"
            required="required"
          />
          <div className="label-up hw">
            <label>Provenance</label>
            <select className="select fw">
              <option value="1">KADUTU</option>
              <option value="2">BAGIRA</option>
              <option value="3">IBANDA</option>
              <option value="4">HORS-VILLE</option>
            </select>
          </div>
          <div className="label-up hw">
            <label>Mode d'arrive</label>
            <select className="select fw">
              <option value="1">DE LA MAISON</option>
              <option value="2">UNT</option>
              <option value="3">AUTRE</option>
            </select>
          </div>
        </Card>
        <Card className="card lw">
          <img
            src={childPicture}
            alt="inserer la photo de l'enfant"
            className="fw"
          />
        </Card>
      </Card>
    </div>
  );
};

export default ChildIdentity;
