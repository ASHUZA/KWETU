import React, { Component } from "react";
import user_img from "../images/user_img.png";

import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

class SectionStep extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <>
        <div className="col-sm-12 d-flex">
          <div className="col-sm-3 form-user">
            <div className="form-title">
              <h3>Compte utilisateur</h3>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <form className="form-horizontal user-form">
              {/* <h3 className="title">Basic information</h3> */}

              <div className="form-main form-main-user">
                <div className="user-img">
                  <img
                    src={user_img}
                    alt="User image"
                    className="img"
                    data-toggle="user-menu"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Post nom"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Prenom"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="sexe"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telephone"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Groupe utilisateur"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>
              <div className="form-footer-user">
                <button className="btn signup">Register</button>
              </div>
            </form>
          </div>

          <div className="col-sm-8">
            <MDBNav className="nav-tabs mt-5">
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "1"}
                  onClick={this.toggle("1")}
                  role="tab"
                >
                  Information sur l'enfant
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "2"}
                  onClick={this.toggle("2")}
                  role="tab"
                >
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "3"}
                  onClick={this.toggle("3")}
                  role="tab"
                >
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "4"}
                  onClick={this.toggle("4")}
                  role="tab"
                >
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  link
                  to="#"
                  active={this.state.activeItem === "5"}
                  onClick={this.toggle("5")}
                  role="tab"
                >
                  Profile
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId="1" role="tabpanel">
                <div className="col-sm-12 save-child">
                  <div className="form-title">
                    <h3>Informations sur la mère</h3>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                  <form className="child-form">
                    {/* <h3 className="title">Basic information</h3> */}
                    <div className="form-main">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Post nom"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Prenom"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telephone"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Groupe utilisateur"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                      </div>
                    </div>
                    <div className="form-footer">
                      <button className="btn signup">Register</button>
                    </div>
                  </form>
                </div>
                <div className="col-sm-12 save-child">
                <div className="form-title">
                  <h3>Informations sur le père</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-main">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sexe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telephone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>

                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <div className="save-child">
                  <div className="form-title">
                    <h3>Informations sur la fratrie</h3>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                  <form className="child-form">
                    {/* <h3 className="title">Basic information</h3> */}
                    <div className="form-main">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Post nom"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Prenom"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="sexe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Telephone"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Groupe utilisateur"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Groupe utilisateur"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Groupe utilisateur"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Groupe utilisateur"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mot de passe"
                        />
                      </div>
                    </div>
                    <div className="form-footer">
                      <button className="btn signup">Register</button>
                    </div>
                  </form>
                </div>
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
              <div className="col-sm-12 save-child">
                <div className="form-title">
                  <h3>Informations sanitaire</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-main">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sexe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telephone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                
                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-sm-12 save-child">
                <div className="form-title">
                  <h3>Images de l'enfants</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                 
                </form>
              </div>
              </MDBTabPane>
              <MDBTabPane tabId="4" role="tabpanel">
              <div className="col-sm-12 save-child">
                <div className="form-title">
                  <h3>Informations vaccinale</h3>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <form className="child-form">
                  {/* <h3 className="title">Basic information</h3> */}

                  <div className="form-main">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="sexe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telephone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Groupe utilisateur"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mot de passe"
                    />
                  </div>
                
                  </div>
                  <div className="form-footer">
                    <button className="btn signup">Register</button>
                  </div>
                </form>
              </div>

              </MDBTabPane>
              <MDBTabPane tabId="5" role="tabpanel">
              <form action="" className="form">
                <h1 className="form__title">Sign In</h1>

                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Email</label>
                </div>

                <div class="form__div">
                    <input type="password" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Password</label>
                </div>

                <input type="submit" className="form__button" value="Sign In"/>
            </form>
              </MDBTabPane>
            </MDBTabContent>
          </div>
        </div>
      </>
    );
  }
}
export default SectionStep;
