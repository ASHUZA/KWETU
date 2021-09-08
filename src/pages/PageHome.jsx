import react from "react";
import "./../scss/PageHome.scss";
import { Link } from "react-router-dom";
import SectionListe from "../sections/SectionListe";
import ClickEvents from "../sections/ClickEvents";
import Header from "./Header";
import ListeItem from "../components/ListeItem";
const PageHome = () => {
  return (
    <>
      <Header></Header>
      <div className="container pagehome">
        <div className="titre1">
          <h2>KESHO CONGO</h2>
        </div>
       

        <div className="box_info">
          <div className="box box1">
            <div className="titre">
              <h3>ENFANTS GUERIS</h3>
            </div>
            <div className="number">
              <h4>200</h4>
            </div>
          </div>
          <div className="box box1">
            <div className="titre">
              <h3>MALNUTRITION AIGUIE</h3>
            </div>
            <div className="number">
              <h4>320</h4>
            </div>
          </div>

          <div className="box box1">
            <div className="titre">
              <h3>MALNUTRITION CHRONIQUE</h3>
            </div>
            <div className="number">
              <h4>211</h4>
            </div>
          </div>

          <div className="box box1">
            <div className="titre">
              <h3>MALNUTRITION SEVAIRE</h3>
            </div>
            <div className="number">
              <h4>50</h4>
            </div>
          </div>
        </div>

        <div className="analyse_board">
          <div className="board_1">
            <div className="titre">
              <h3>ETAT DES AIGUIE</h3>
            </div>
            <div className="box">
              <ClickEvents />
            </div>
          </div>
          <div className="board_2">
            <div className="titre">
              <h3>ENFANTS GUERIS</h3>
            </div>
            <div className="box">
              <ClickEvents />
            </div>
          </div>
        </div>

        <div className="liste_enfants">
          <div className="liste_titre">
            <h3>ENFANTS GUERIES</h3>
          </div>
          <div className="container">
            <div className="liste_box">
              <div className="liste_item_titre">
                <p className="liste_label_titre prenom">Prenom</p>
                <p className="liste_label_titre nom">Nom</p>
                <p className="liste_label_titre postnom">Postnom</p>
                <p className="liste_label_titre sante">Santé</p>
                <p className="liste_label_titre age">Age</p>
                <p className="liste_label_titre sexe">Sexe</p>
              </div>

              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
              <ListeItem></ListeItem>
            </div>
          </div>

          <Link className="btn-more" to="/PageSearch">
            Voir plus
          </Link>
        </div>
      </div>
    </>
  );
};
export default PageHome;
