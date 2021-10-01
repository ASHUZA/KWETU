import "./../scss/PageConnexion2.scss";
import icon_user from "./../images/svg/bxs-user.svg";
import icon_lock from "./../images/svg/bxs-lock-alt.svg";
import img_connection from "./../images/svg/connexion.svg";
import React from "react";
import { Link } from "react-router-dom";
import PageHome from "./../pages/PageHome.jsx";
import SideBar from "../components/SideBar";
import {useForm} from "react-hook-form";
import axios from "axios";

const PageConnexion2 = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

 const submit =(data)=>{
   try {
     const rsponse = axios.get("http://localhost:3001/utilisateur")
   } catch (error) {
     
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
                  {/* <img src={icon_user} alt="user icon" /> */}
                  <input type="text" {...register("name")} placeholder="username" />
                </div>
                <div className="input-group">
                  {/* <img src={icon_lock} alt="user icon" /> */}

                  <input type="password"  {...register("password")} placeholder="Password" />
                </div>
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
