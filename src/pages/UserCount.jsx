import react from "react";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import user_img from "../images/user_img.png";

import Navbar from "../components/Navbar";
import "./UserCount.scss"
const UserCount = () => {

  const Utilisateurs = [
    {
      id: 1,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: `https://scontent.ffih1-2.fna.fbcdn.net/v/t1.18169-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGaJhJHTcvbGlprrDE2o1PrYP_INh5Bmohg_8g2HkGaiBGk69YcO2uK4RNfEj4G2lIUZtVcuVzQK0gQYAe9Zx67&_nc_ohc=BPRsoFXFKJgAX8eWB-H&_nc_ht=scontent.ffih1-2.fna&oh=e05e1efa2fca57fea27376a9630b4424&oe=6171C533`,
    },
    {
      id: 2,
      nom: "Kalimbiro",
      postnom: "Amani",
      prenom: "Ruffin",
      poste: "Stagiaire",
      sexe: "Homme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 3,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 4,
      nom: "Kalimbiro",
      postnom: "Amani",
      prenom: "Ruffin",
      poste: "Stagiaire",
      sexe: "Homme",
      phone: "0974574833",
      Groupeuser: "Administrateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 5,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 6,
      nom: "Kalimbiro",
      postnom: "Amani",
      prenom: "Ruffin",
      poste: "Stagiaire",
      sexe: "Homme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 7,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 8,
      nom: "Kalimbiro",
      postnom: "Amani",
      prenom: "Ruffin",
      poste: "Stagiaire",
      sexe: "Homme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 9,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "Administrateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 10,
      nom: "Kalimbiro",
      postnom: "Amani",
      prenom: "Ruffin",
      poste: "Stagiaire",
      sexe: "Homme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
    {
      id: 11,
      nom: "Riziki",
      postnom: "Chuma",
      prenom: "Bénédicte",
      poste: "Nustrisioniste",
      sexe: "Femme",
      phone: "0974574833",
      Groupeuser: "utilisateur",
      login: "Rushingwa",
      password: "ChekaNabatoto",
      image: "",
    },
  ];

  
  let defaultImage = "user_img_default";
  const [foundUser, setFoundUser] = useState({});
  const [idUser, setIdUser] = useState(1);

  useEffect(() => {
    const foundUser = Utilisateurs.find((user) => user.id === idUser);
    setFoundUser(foundUser);
  }, [idUser]);

  // function Showuser(id) {
  //   setIdUser(id);
  // }


  return (
    <>
      <div className="homme_main">
        <div className="nav_item nav_burger">
          <div className="nav_icon">
            <li className="nav-item">
              <a className="nav-link">
                <i className="fas fa-bars" onclick="collapseSidebar()"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="nav_item">
          <form className="navbar-search">
            <input
              type="text"
              name="Search"
              className="navbar-search-input"
              placeholder="What you looking for..."
            />
            <i className="fas fa-search"></i>
          </form>
        </div>
        <div className="nav_item nav_setting">
          <div className="nav_icon">
            <i class="fas fa-moon dark-icon"></i>
          </div>

          <div className="nav_icon">
            <a clasName="nav-link">
              <i
                className="fas fa-bell dropdown-toggle"
                data-toggle="notification-menu"
              ></i>
            </a>
          </div>

          <div className="nav_icon">
            <div className="avt dropdown">
              <img
                src={user_img}
                alt="User image"
                className="dropdown-toggle"
                data-toggle="user-menu"
              />
            </div>
          </div>
        </div>
      </div>
      <Navbar/>


      <div className="wrapper user-count-main">
      <div className="container">
            <div className="row">
              <div className="col-sm-12 form-user">
                <div className="form-title">
                  <h3>Mon compte utilisateur</h3>
                  <Link to="/UserManagement">
                  <i className="fas fa-ellipsis-h"></i>
              </Link>
                  
                </div>
                <form className="form-horizontal-user">
                  <div className="col-sm-12 d-flex justify-content-center">
                    <div className="col-sm-4">
                    <div className="user-img">
                      <img
                        src={user_img}
                        alt="User image"
                        className="img"
                        data-toggle="user-menu"
                      />
                    </div>
                    </div>
                    <div className="col-sm-8 d-flex flex-wrap mt-3 user-count">
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.nom}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">prenom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.prenom}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">postnom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.postnom}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Sexe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.sexe}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Telephone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.phone}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Poste</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.poste}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Groupe utilisateur</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.Groupeuser}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Login</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.login}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Mot de passe</label>
                      <input
                        type="text"
                        className="form-control"
                        name="sexe"
                        value={foundUser.password}
                      />
                    </div>
                   


                    </div>
                  </div>
                  <div className="form-footer-user">
                    <button className="btn signup">Enregister</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
    </>
  );
};
export default UserCount;
