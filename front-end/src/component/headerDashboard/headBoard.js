import './headBoard.css'
import { Link } from "react-router-dom";
import Logo from "../../images/logo_crp.png"
import UserLogo from "../../images/profile-simple.png"

import React from "react";

function HeaderDashboard(){
  return(
    <nav>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      <div className="container">
            <Link to="/homeLogin" >
              <img class="head-logo" src={Logo} alt="logo"/>
            </Link>
        <div className="search-bar">
            <span className="material-icons-sharp">search</span>
            <input type="search" placeholder="Search" />
        </div>
        <div className="profile-area">
          <div className="theme-btn">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="profile-photo">
                <img src={UserLogo} alt="perfil simples"/>
            </div>
            <h5>Usuario Name</h5>
            <span className="material-icons-sharp">expand_more</span>
          </div>
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default HeaderDashboard;