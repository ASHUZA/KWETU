import "./../scss/PageConnexion2.scss";
import icon_user from "./../images/svg/bxs-user.svg";
import icon_lock from "./../images/svg/bxs-lock-alt.svg";
import img_connection from "./../images/svg/connexion.svg";
import React from "react";
import { useEffect, useState} from "react";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PageHome from "./../pages/PageHome.jsx";
import SideBar from "../components/SideBar";
import {useForm} from "react-hook-form";
import axios from "axios";

const PageConnexion2 = () => {

  const [darkMode, setDarkMode]= useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const history = useHistory();
 const submit =async (data)=>{
  console.log(data)
   try {
     const response = await axios.post("https://kesho-congo-backend.herokuapp.com/utilisateur/login",data);
     localStorage.setItem("user",response.data.acces_token)
     if (response) {
       history.push("/KeshoChart")
       
     }

     console.log("ressss ",response)
     console.log(data)
   } catch (error) {
     
    {()=> setDarkMode(!darkMode)} 

   }
 }
  return (
    <>
      <div className="container--fluid">
        <div className="row content-row">
          <div className="col1 bloc1">
            <div className="text sign-in">
              <h2>Welcome back</h2>
              <p>
                Kesho Congo Center for Nutrition and Health EducationCentre
                Nutritionnel et d'Éducation Sanitaire de Kesho Congo
              </p>
            </div>
            <div className="img sign-in">
              <img src={img_connection} alt="login image" />
            </div>
          </div>
          <div className="col bloc2 align-items-center">
            <div className="form-wrapper align-items-center">
              <form onSubmit={handleSubmit(submit)} className="form">
                <div className="input-group">
                 
                  <box-icon name="user" type="solid"></box-icon>
                  <img src={icon_user} alt="user icon" />
                  <input type="text" {...register("user_name_system")} placeholder="username" />
                </div>
                <div className="input-group">
                  <img src={icon_lock} alt="user icon" />

                  <input type="password"  {...register("user_password")} placeholder="Password" />
                </div>
                <div className="password-invalid" style={{display: darkMode ? "block" : "none"}}><p>Mot de passe incorrect</p></div>
                <input type='submit' className="btn-sign" value="sign in"/>

             
              </form>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <SideBar></SideBar>
        </div>
      </div>
    </>
  );
};
export default PageConnexion2;
