import "./../scss/PageConnexion.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
   <div className="side_bar">
        <div className="sidebar">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link active">
                <div>
                <i class="fas fa-search"></i>
                </div>
                <span>Recherche</span>
              </a>
            </li>
            <li className="sidebar-nav-item">


            <Link className="btn-validate" to="/KeshoParents">
          
              <a href="#" className="sidebar-nav-link">
                <div>
                <i class="fas fa-user-plus"></i>
                </div>
                <span>Nouve enfant</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-nav-item">
            <Link className="btn-validate" to="/KeshoChildren">
              <a href="#" className="sidebar-nav-link">
                <div>
                <i class="fas fa-list"></i>
                </div>
                <span>Liste des enfants</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-nav-item">
            <Link className="btn-validate" to="/KeshoChart">
              <a href="#" className="sidebar-nav-link">
                <div>
                <i className="fas fa-chart-line"></i>  
                </div>
                <span>Rapport</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-nav-item">
               <Link className="btn-validate" to="/UserCount">
              <a href="#" className="sidebar-nav-link">
                <div>
                <i class="fas fa-user-md"></i>
                </div>
                <span>Utilisateur</span>
              </a>
              </Link>
            </li>
            <li className="sidebar-nav-item">
            <Link className="btn-validate" to="/UserManagement">
              <a href="#" className="sidebar-nav-link">
                <div>
                <i class="fas fa-users-cog"></i>
                </div>
                <span>Paramettre utilisateur</span>
              </a>

               </Link>
            </li>
            <li className="sidebar-nav-item">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-cog"></i>
                </div>
                <span>Paramettre</span>
              </a>
            </li>
            <li className="sidebar-nav-item">
            <Link className="btn-validate" to="/">
              <a href="#" className="sidebar-nav-link">
                <div>
                  <i className="fas fa-sign-out-alt"></i>
                </div>
                <span>Deconnexion</span>
              </a>
              </Link>
            </li>
         
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
