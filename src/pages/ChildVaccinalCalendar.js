import "../components/Card/Card.css";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";

const ChildVaccinalCalendar = () => {
  return (
    <div>
      <h3>Calendrier Vaccinal</h3>
      <Card className="card dashed-card fw flx flx-wrap content-left">
        <Card className="card shadow-card lw">
          <h4>A la naissance</h4>
          <Input label="VPO" type="checkbox" />
          <Input label="BCG" type="checkbox" />
        </Card>
        <Card className="card shadow-card lw">
          <h4>6 semaines (1.5 mois)</h4>
          <Input label="VPO" type="checkbox" />
          <Input label="DTC-HepB-HiB" type="checkbox" />
          <Input label="Pneumo" type="checkbox" />
          <Input label="Rotasiil" type="checkbox" />
        </Card>
        <Card className="card shadow-card lw">
          <h4>10 semaines (2.5 mois)</h4>
          <Input label="VPO" type="checkbox" />
          <Input label="DTC-HepB-HiB" type="checkbox" />
          <Input label="Pneumo" type="checkbox" />
          <Input label="Rotasiil" type="checkbox" />
        </Card>
        <Card className="card shadow-card lw">
          <h4>14 semaines (3.5 mois)</h4>
          <Input label="VPO" type="checkbox" />
          <Input label="DTC-HepB-HiB" type="checkbox" />
          <Input label="Pneumo" type="checkbox" />
          <Input label="Rotasiil" type="checkbox" />
        </Card>
        <Card className="card shadow-card lw">
          <h4>9 mois</h4>
          <Input label="VAR" type="checkbox" />
          <Input label="VAA" type="checkbox" />
        </Card>
      </Card>
    </div>
  );
};

export default ChildVaccinalCalendar;
