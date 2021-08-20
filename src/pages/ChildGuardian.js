import Card from "../components/Card/Card";
import "../components/Card/Card.css";
import "../components/Input/Input.css";
import Input from "../components/Input/Input";
import "../components/Select/Select.css";
import "../components/Button/Button.css";
import Button from "../components/Button/Button";

const ChildGuardian = () => {
  return (
    <Card className="card screen">
      <h2>0.2 TUTEURS </h2>
      <h3>Mère</h3>
      <Card className="card dashed-card flx fw flx-wrap">
        <Input label="Nom" type="text" className="label-up lw" />
        <Input label="Prenom" type="text" className="label-up lw" />
        <div className="label-up lw">
          <label>En vie</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">OUI</option>
            <option value="2">NON</option>
          </select>
        </div>
        <Input label="Téléphone" type="tel" className="label-up lw" />
        <div className="label-up lw">
          <label>Etat maternel</label>
          <select className="select fw">
            <option value="0">AUCUN</option>
            <option value="1">ENCEINTE</option>
            <option value="2">ALLAITANTE</option>
            <option value="3">ENCEINTE ET ALLAITANTE</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Scolarité</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">ANALPHABETE</option>
            <option value="2">PRIMAIRE</option>
            <option value="2">DIPLOMEE</option>
            <option value="3">GRADUEE</option>
            <option value="4">LICENCIEE</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Profession</label>
          <select className="select fw">
            <option value="0">------</option>
            <option value="1">SALARIE FORMEL</option>
            <option value="2">TRAVAILLEUR A TEMPS PARTIEL</option>
            <option value="3">BUSINESSMAN</option>
            <option value="4">AUTRE</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Statut marital</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">CELIBATAIRE</option>
            <option value="2">MARIEE</option>
            <option value="3">DIVORCEE</option>
            <option value="4">VEUVE</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Si mariée, Regime</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">MONOGAME</option>
            <option value="2">POLYGAME</option>
          </select>
        </div>
        <Input
          label="Nombre 
de femmes"
          type="number"
          className="label-up lw"
        />
        <div className="label-up lw">
          <label>Contraception</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">ABSTINENCE PERIODIQUE </option>
            <option value="2">COIT INTERROMPU</option>
            <option value="2">TEMPERATURE BASALE </option>
            <option value="3">GLAIRE CERVICALE</option>
            <option value="4">MAMA</option>
            <option value="4">CONTRACEPTIFS ORAUX</option>
            <option value="4">IMPLANTS</option>
            <option value="4">
              PATCH CONTRACEPTIF COMBINE ET ANNEAU CONTRACEPTIF INTRA-VAGINAL
            </option>
            <option value="4">PRESERVATIF MASCULIN ET FEMININ </option>
          </select>
        </div>
      </Card>
      <h3>Père</h3>
      <Card className="card dashed-card flx fw flx-wrap">
        <Input label="Nom" type="text" className="label-up lw" />
        <Input label="Prenom" type="text" className="label-up lw" />
        <div className="label-up lw">
          <label>En vie</label>
          <select className="select fw">
            <option value="1">OUI</option>
            <option value="2">NON</option>
          </select>
        </div>
        <Input label="Téléphone" type="tel" className="label-up lw" />
        <div className="label-up lw">
          <label>Scolarité</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">ANALPHABETE</option>
            <option value="2">PRIMAIRE</option>
            <option value="2">DIPLOME</option>
            <option value="3">GRADUE</option>
            <option value="4">LICENCIE</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Profession</label>
          <select className="select fw">
            <option value="0">------</option>
            <option value="1">SALARIE FORMEL</option>
            <option value="2">TRAVAILLEUR A TEMPS PARTIEL</option>
            <option value="3">BUSINESSMAN</option>
            <option value="4">AUTRE</option>
          </select>
        </div>
        {/* <Input label="Profession" type="text" className="label-up lw" /> */}
      </Card>
      <div className="flx hw centered-content">
        <Button title="Annuler" className="button lw" />
        <a href="/" className="button lw">
          <Button title="Precedent" />
        </a>
        <a href="/family" className="button lw">
          <Button title="Suivant" />
        </a>
      </div>
    </Card>
  );
};

export default ChildGuardian;
