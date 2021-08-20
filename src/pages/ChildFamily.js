import Card from "../components/Card/Card";
import "../components/Card/Card.css";
import "../components/Input/Input.css";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import "../components/Button/Button.css";

const ChildFamily = () => {
  return (
    <Card className="card screen">
      <h2>0.3 FAMILLE </h2>
      <Card className="card dashed-card flx fw flx-wrap">
        <div className="label-up lw">
          <label>Tribu</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">SHI</option>
            <option value="2">REGA</option>
            <option value="3">HAVU</option>
            <option value="4">AUTRES</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Niveau socio - eco</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">BAS (&lt; 1 USD)</option>
            <option value="2">MOYEN (&lt; = 5 USD)</option>
            <option value="3">BON (&gt; 5 USD)</option>
          </select>
        </div>
        <Input label="Taille du menage" type="tel" className="label-up lw" />
        <Input
          label="Possession tele/radio"
          type="text"
          className="label-up lw"
        />
        <Input
          label="Taille de la fratrie"
          type="text"
          className="label-up lw"
        />
        <Input
          label="MAS dans la fratrie"
          type="text"
          className="label-up lw"
        />
        <Input
          label="Rougeole dans la fratrie"
          type="text"
          className="label-up lw"
        />
        <Input
          label="ATCD TCB  dans la  fratrie"
          type="text"
          className="label-up lw"
        />
        <Input label="Duree (mois)" type="number" className="label-up lw" />
        <Input label="Declaré guerie" type="text" className="label-up lw" />
        <Input label="TCB parents" type="text" className="label-up lw" />
        <Input label="Terrain VIH" type="text" className="label-up lw" />
        <Input
          label="Hospitalisation recente"
          type="text"
          className="label-up lw"
        />
        <Input
          label="Utilisation produit a base des 
plantes"
          type="text"
          className="label-up lw"
        />
        <Input label="Durée" type="text" className="label-up lw" />
        <Input
          label="Duree utilisation Coktail"
          type="text"
          className="label-up lw"
        />
        <Input
          label="Nombre repas par jour"
          type="text"
          className="label-up lw"
        />
        <Input
          label="Consommation poisson"
          type="text"
          className="label-up lw"
        />
        <Input label="Religion" type="text" className="label-up lw" />
        <Input label="Prise recente ATCB" type="text" className="label-up lw" />
      </Card>
      <div className="flx hw centered-content">
        <Button title="Annuler" className="button lw" />
        <a href="/guardian" className="button lw">
          <Button title="Precedent" />
        </a>
        <Button title="Valider" className="button lw" />
      </div>
    </Card>
  );
};

export default ChildFamily;
