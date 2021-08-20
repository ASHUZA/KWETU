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
        <div className="analyse_board">
          <div className="board_1">
            <div className="titre">
              <h3>ETAT DES ENFANTS</h3>
            </div>
            <div className="box">
            <ClickEvents/>
            </div>
          </div>
          <div className="board_2">
            <div className="titre">
              <h3>ENFANTS GUERIS</h3>
            </div>
            <div className="box">
            <ClickEvents/>
            </div>
          </div>
        </div>
        <div className="analyse_board">
          <div className="board_1">
            <div className="titre">
              <h3>ETAT DES ENFANTS</h3>
            </div>
            <div className="box">
            <ClickEvents/>
            </div>
          </div>
          <div className="board_2">
            <div className="titre">
              <h3>VACCINATION</h3>
            </div>
            <div className="box">
            <ClickEvents/>
            </div>
          </div>
        </div>
        <div className="liste_enfants">
          <div className="liste_titre">
            <h3>ENFANTS A RECEVOIR</h3>
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
              </div>
              </div>




          <Link className="btn-more" to="/PageSearch">
            Voir plus
          </Link>
        </div>
    
        <div className="box_info">
          <div className="titre">
            <h3>MALNUTRITION</h3>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde
              obcaecati blanditiis illum ea reiciendis recusandae dolore,
              voluptatum quo voluptate iste delectus sint nesciunt facilis
              reprehenderit consequatur maiores non nihil.
            </p>
          </div>
        </div>

       

        <div className="analyse_board">
          <div className="board_1">
            <div className="titre">
              <h3>ETAT DES ENFANTS</h3>
            </div>
            <div className="box">
            <ClickEvents/>
            </div>
          </div>
          <div className="board_2">
            <div className="titre">
              <h3>ENFANTS GUERIS</h3>
            </div>
            <div className="box">
            <ClickEvents/>
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
