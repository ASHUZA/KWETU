import react from "react";

import "./../scss/PageSearch.scss";
import SectionListe from "../sections/SectionListe";
import Header from "./Header";
import ListeItem from "../components/ListeItem";

const PageSearch = () => {
  return (
    <>
      <Header></Header>
      <div className="pagesearch">
        <div className="container container_search">
        
          <div className="container">
          <div className="liste_titre">
            <h3>LISTE DES ENFANTS EN CHARGE</h3>
          </div>

            <div className="container">
              <div className="liste_box_search">
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
                <ListeItem></ListeItem>
                <ListeItem></ListeItem>
                <ListeItem></ListeItem>
                <ListeItem></ListeItem>
                <ListeItem></ListeItem>
              </div>
            </div>
          </div>

          <div className="search_box">
            <div className="search_item">
              <label></label>
              <input className="w3-input" type="text" value="Recherche" />
            </div>
            <div className="search_item">
              <label></label>
              <select className="select fw">
                <option value="1">Par age</option>

                <option value="2">2 Mois</option>
                <option value="3">3 Mois</option>
                <option value="4">4 Mois</option>
                <option value="5">5 Mois</option>
                <option value="6">6 Mois</option>
                <option value="7">7 Mois</option>
                <option value="8">8 Mois</option>
                <option value="9">9 Mois</option>
                <option value="10">10 Mois</option>
                <option value="11">11 Mois</option>
                <option value="12">12 Mois</option>
                <option value="13">13 Mois</option>
                <option value="14">14 Mois</option>
                <option value="15">15 Mois</option>
              </select>
            </div>

            <div className="search_item">
              <label></label>
              <select className="select fw">
                <option value="1">Par sexe</option>

                <option value="1">MASCULIN</option>
                <option value="2">FEMININ</option>
              </select>
            </div>

            <div className="search_item">
              <label></label>
              <select className="select fw">
                <option value="1">Par provenance</option>
                <option value="1">KADUTU</option>
                <option value="2">ESSENCE</option>
                <option value="3">BAGIRA</option>
                <option value="4">NYAWERA</option>
                <option value="5">KADUTU</option>
                <option value="6">ESSENCE</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageSearch;
