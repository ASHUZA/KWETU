import "./../scss/ListeItem.scss";

const ListeItem = () => {
  return (
    <>
      <div className="liste_item">
        <p className="liste_label prenom">Randy</p>
        <p className="liste_label nom">Buhendwa</p>
        <p className="liste_label postnom">Buhendwa</p>
        <p className="liste_label sante">Guerie</p>
        <p className="liste_label age"> 5 mois</p>
        <p className="liste_label sexe"> Masculin</p>
      </div>
    </>
  );
};
export default ListeItem;
