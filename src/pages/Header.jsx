import react from "react";
import search_icon from "./../images/svg/search.svg";
import chart_icon from "./../images/svg/chart.svg";
import enfant_new_icon from "./../images/svg/enfant_new.svg";
import login_icon from "./../images/svg/login.svg";
import paramettres_icon from "./../images/svg/paramettres.svg";
import programme_icon from "./../images/svg/programme.svg";
import suivie_icon from "./../images/svg/suivie.svg";
import user_icon from "./../images/svg/user.svg";
import menu_icon from "./../images/svg/menu.svg";
import ash_img from "./../images/PROFIL PORTFOLIO ASH_convert.png";
import "./../scss/Header.scss";

import { Link, NavLink } from "react-router-dom";
import PageHome from "./PageHome";
import PageConnexion from "./PageConnexion";

const Header = () => {
  return (
    <>
      <div className="header_main">
        <Link to="/">
          <div className="header_item_menu">
            <img src={menu_icon} alt="recherche" />
          </div>
        </Link>

        <div className="header_box_item">
          <Link to="/PageSearch">
            <div className="header_item">
              <img src={search_icon} alt="recherche" />
            </div>
          </Link>

          <Link to="/PageNewChild">
          <div className="header_item">
            <img src={enfant_new_icon} alt="recherche" />
          </div>
          </Link>


          <div className="header_item">
            <img src={suivie_icon} alt="recherche" />
          </div>


          <Link to="/PageHome">
          <div className="header_item">
            <img src={chart_icon} alt="recherche" />
          </div>
          </Link>

          <div className="header_item">
            <img src={programme_icon} alt="recherche" />
          </div>
          <div className="header_item">
            <img src={user_icon} alt="recherche" />
          </div>
          <div className="header_item">
            <img src={paramettres_icon} alt="recherche" />
          </div>
        </div>
        <div className="header_item_login">
          <img src={login_icon} alt="recherche" />
        </div>
      </div>
    </>
  );
};
export default Header;
