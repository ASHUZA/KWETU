import react from "react";
import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";
import user_img from "../images/user_img.png";
import child2_img from "../images/child2.jpg";

import child1_img from "../images/enfant1.jpg";
import user_img_default from "../images/profil.png";

import Navbar from "../components/Navbar";
import "./KeshoChildFollow.scss";
import ReactStep from "./ReactStep";
import ClickEvents from "../sections/ClickEvents";

import Modal from "../components/modal1";



const KeshoChildFollow = () => {
  // https://www.youtube.com/watch?v=PWK5IBi4-Es

  
 const [modalOpen, setModalOpen] = useState(false);
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
      image: child2_img,
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

  function Showuser(id) {
    setIdUser(id);
  }

  const visiteNutritionnel = [
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
    },
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
    },
  ];



  const [users, setUsers] = useState(Utilisateurs.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="homme_main">
        <div className="nav_item nav_burger">
          {/* <div className="nav_icon">
            <li className="nav-item">
              <a className="nav-link">
                <i className="fas fa-bars" onclick="collapseSidebar()"></i>
              </a>
            </li>
          </div> */}
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
      <Navbar />

      <div className="wrapper">
        <div className="user_main d-flex justify-content-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-7 form-user">
                    <div className="form-title">
                      <h3>Profil enfant</h3>
                
                        <i className="fas fa-ellipsis-h"  onClick={() => {
                      setModalOpen(true);
                    }}></i>
              
                    </div>
                    <form className="form-horizontal-user">
                      <div className="col-sm-12 d-flex justify-content-center">
                        <div className="col-sm-3">
                          <div className="childs-img">
                            <img
                              src={
                                foundUser.image ? foundUser.image : child2_img
                              }
                              alt="User image"
                              data-toggle="user-menu"
                            />
                          </div>
                        </div>
                        <div className="col-sm-9 d-flex flex-wrap mt-3 user-count">
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
                            <label htmlFor="email">Age</label>
                            <input
                              type="email"
                              className="form-control"
                              name="prenom"
                              value=""
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Etat de santé</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="phone"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                     
                    </form>
                  </div>

                  <div className="col-sm-5 form-user">
                    <ClickEvents />
                  </div>

                  <div className="col-sm-7">
                <div className="pagesearch-main">
                  <div className="table-wrapper">
                    <table className="fl-table">
                      <thead>
                        <tr>
                        

                          <th>Date</th>
                            <th>Nutritioniste</th>
                            <th>Pois</th>
                            <th>Taille</th>
                            <th>Etat de santé</th>
                            <th>Traitement administré</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users
                          .slice(pagesVisited, pagesVisited + usersPerPage)
                          .map((user) => {
                            return (
                              <>
                                <tr onClick={() => Showuser(user.id)}>
                                  <td>{user.nom}</td>
                                  <td>{user.prenom}</td>
                                  <td>{user.sexe}</td>
                                  <td>{user.poste}</td>
                                  <td>{user.phone}</td>
                                  <td>{user.Groupeuser}</td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <ReactPaginate
                    previousLabel={"Precedent"}
                    nextLabel={"Suivant"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"active"}
                    subContainerClassName={"pages pagination"}
                  />
                </div>
              </div>

              

                  <div className="col-sm-5 mt-5">
                    
              {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    <div className="form-container">
                      
                      <div className="form-title">
                        <h3>Visiste nutritionnel</h3>
                        <i className="fas fa-ellipsis-h" onClick={() => {
                      setModalOpen(true);
                    }}> </i>
                      </div>
                      <div className="form-group-main">
                        <div className="row form-add-child d-flex flex-wrap">
                          <div className="accompagnant-form col-sm d-flex flex-wrap justify-content-start">
                            <div className="form-group">
                              <label htmlFor="name">Date</label>

                              <input
                                type="email"
                                className="form-control"
                                name="prenom"
                                value={foundUser.nom}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Nutritioniste</label>

                              <input
                                type="email"
                                className="form-control"
                                name="prenom"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="name">Poids enfant</label>

                              <input
                                type="email"
                                className="form-control"
                                name="prenom"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Taille enfant</label>
                              <input
                                type="email"
                                className="form-control"
                                name="prenom"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="phone">Periemtre brachial</label>
                              <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="phone">Oedemes</label>
                              <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">
                                Traitement administré
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="sexe"
                                value=""
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="name">Rations sèches</label>
                              <input
                                type="text"
                                className="form-control"
                                name="nom"
                                value=""
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Autres informations</label>
                              <input
                                type="email"
                                className="form-control"
                                name="prenom"
                                value=""
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="phone">Etat de l'enfant</label>
                              <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                value={foundUser.phone}
                              />
                            </div>
                            <div className="childs-img">
                              <img
                                src={
                                  foundUser.image ? foundUser.image : child1_img
                                }
                                alt="User image"
                                data-toggle="user-menu"
                              />
                            </div>
                          </div>
                          <div className="form-footer-user">
                            <button className="btnsave">Enregister</button>
                          </div>
                        </div>

                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default KeshoChildFollow;
