import react from "react";

// import "./../scss/PageSearch.scss";
import SectionListe from "../sections/SectionListe";
import Header from "./Header";
import ListeItem from "../components/ListeItem";

const PageSearch = () => {
  return (
    <>
      <Header></Header>
      <div className="pagesearch">
        <div className="container container_search">
          <div className="liste_titre">
            <h3>LISTE DES ENFANTS EN CHARGE</h3>
          </div>
          <div className="container liste_search">
            <div className="liste_items">
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

            <div className="search_box">
              <div className="search_result">
                <p>
                  Resultats :<span>150 enfants en charge</span>
                </p>
              </div>

              <div className="title">
                <h4>Recherche</h4>
              </div>
              <div className="search_time">
                <div className="search_item">
                  <label>Recherhe par nom</label>
                  <input className="w3-input" type="text" />
                </div>
              </div>
              <div className="search_time">
                <div className="search_item">
                  <label>Par Annee</label>
                  <select className="select">
                    <option value="1">Par annee</option>

                    <option value="1">MASCULIN</option>
                    <option value="2">FEMININ</option>
                  </select>
                </div>

                <div className="search_item">
                  <label>Par Mois</label>
                  <select className="select fw">
                    <option value="1">Par mois</option>
                    <option value="1">KADUTU</option>
                  </select>
                </div>
              </div>

              <div className="search_time">
                <div className="search_item">
                  <label>Par Annee</label>
                  <select className="select fw">
                    <option value="1">Par annee</option>

                    <option value="1">MASCULIN</option>
                    <option value="2">FEMININ</option>
                  </select>
                </div>

                <div className="search_item">
                  <label>Par Mois</label>
                  <select className="select fw">
                    <option value="1">Par mois</option>
                    <option value="1">KADUTU</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageSearch;
