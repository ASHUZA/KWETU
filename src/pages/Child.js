import Card from "../components/Card/Card";
import ChildIdentity from "./ChildIdentity";
import ChildSanitary from "./ChildSanitary";
import ChildVaccinalCalendar from "./ChildVaccinalCalendar";
import "./../components/Card/Card.css"
import Button from "../components/Button/Button";
import "../components/Button/Button.css";

const Child = () => {
  return (
    <Card className="card fw">
      <h2>0.1 ENFANT </h2>
      <ChildIdentity />
      <ChildSanitary />
      <ChildVaccinalCalendar />
      <div className="flx hw centered-content">
        <Button title="Annuler" className="button lw" />
        <a href="/guardian" className="button lw">
          <Button title="Suivant" />
        </a>
      </div>
    </Card>
  );
};

export default Child;
