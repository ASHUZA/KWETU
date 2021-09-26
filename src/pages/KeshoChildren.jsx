import React from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import "./../scss/PageHome2.scss";
import { Link } from "react-router-dom";

import user_img from "../images/user_img.png";
import Navbar from "../components/Navbar";

const KeshoChildren = () => {
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

  const [users, setUsers] = useState(Utilisateurs.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 15;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };





  
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
      <Navbar />

      <div className="wrapper d-flex">
        <div className="col-sm-9">
          <div className="pagesearch-main">
            <div className="table-wrapper">
              <table className="fl-table">
                <thead>
                
                    <tr>
                      <th>prenom</th>
                      <th>Nom</th>
                      <th>Sexe</th>
                      <th>Age</th>
                      <th>Etat</th>
                      <th>Accompagnant</th>
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
        <div className="col-sm-3">
          <div className="col-sm-12 form-user">
            <div className="form-title">
              <h3>Profil de l'enfant</h3>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <form className="form-horizontal user-form">
              {/* <h3 className="title">Basic information</h3> */}

              <div className="form-main form-main-user">
                <ul class="list-group">
                  <li class="list-group-item">
                    <div className="user-img">
                      <img
                        src={user_img}
                        alt="User image"
                        className="img"
                        data-toggle="user-menu"
                      />
                    </div>
                  </li>
                  <li class="list-group-item">Nome: {foundUser.nom}</li>
                  <li class="list-group-item">Prenom: {foundUser.nom}</li>
                  <li class="list-group-item">Postnom: {foundUser.nom} </li>
                  <li class="list-group-item">Sexe: {foundUser.nom} </li>
                  <li class="list-group-item">Age:{foundUser.nom}</li>
                </ul>
                <div className="form-footer-user">
              
                <Link className="btn-validate" to="/KeshoChildDetail">
                  <button className="btn signup">Voir plus</button>
                </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* <div className="form-new-child-button">
            <div className="row">
              <div className="d-flex align-items-center">
                <div className="col-6 footer-form">
                  <button className="btn">
                    Back
                  </button>
                </div>

                <div className="col-6 footer-form text-right">
                  <button className="btn">
                    Enregistrer
                  </button>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
};
export default KeshoChildren;
