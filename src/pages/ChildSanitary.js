import "../components/Card/Card.css";
import "../components/Input/Input.css";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";

const ChildSanitary = () => {
  return (
    <div>
      <h3>Information sanitaire</h3>
      <Card className="card dashed-card  flx flx-wrap fw">
        <div className="label-up lw">
          <label>Lieu d’accouchement</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">STRUCTURES SANITAIRES</option>
            <option value="2">AUTRES</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Terme grossesse</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">PREMATURE</option>
            <option value="2">A TERME</option>
          </select>
        </div>
        <div className="label-up lw">
          <label>Sejour en NEONAT</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">OUI</option>
            <option value="2">NON</option>
          </select>
        </div>
        {/* <Input label="Sejour en  NEONAT" type="text" className="label-up lw" /> */}

        <Input
          label="EIG Moyen (Année)"
          type="number"
          className="label-up lw"
        />
        <div className="label-up lw">
          <label>Asphixie perinatale</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">OUI</option>
            <option value="2">NON</option>
          </select>
        </div>
        <Input
          label="Poids a la naissance"
          type="number"
          className="label-up lw"
        />
        <div className="label-up lw">
          <label>Allaitement maternelle exclusif</label>
          <select className="select fw">
            <option value="0">---</option>
            <option value="1">1 MOIS</option>
            <option value="2">2 MOIS</option>
            <option value="3">3 MOIS</option>
            <option value="4">4 MOIS</option>
            <option value="5">5 MOIS</option>
            <option value="6">6 MOIS</option>
          </select>
        </div>
        <Input
          label="constitution  alimentaire"
          type="text"
          className="label-up lw"
        />
      </Card>
    </div>
  );
};

export default ChildSanitary;
