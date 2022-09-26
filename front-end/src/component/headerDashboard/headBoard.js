import './headBoard.css'
import { Link } from "react-router-dom";
import Logo from "../../images/logo_crp.png"

import React, {useContext} from "react";
import { UserContext } from "../../contexts/UserContexts";

function HeaderDashboard(){

  const {loginEmail,logout} = useContext(UserContext)

  const openMenu = () => {
    const MenuStatus = document.querySelector(".menu-modal");

    if (MenuStatus.style.display === "flex"){
      document.querySelector(".menu-modal").style.display = "none";
    } else {
      document.querySelector(".menu-modal").style.display = "flex";
    }

  };
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
          {/* <div className="theme-btn">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div> */}
          <div className="profile">
            {/* <div className="profile-photo">
                <img src={UserLogo} alt="perfil simples"/>
            </div> */}
            <h5>{loginEmail}</h5>
            {/* <span className="material-icons-sharp">expand_more</span> */}
          </div>
          {/* <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button> */}
        <button id="menu-button" onClick={openMenu}>
          MENU
        </button>
        <div class="menu-modal">
          <div class="menu-content">
              <div>
              <div class="menu-config">

                    Trocar Nome
                </div>
                <div class="menu-config">

                    Modo Noturno
                </div>
                <div class="menu-config" onClick={logout}>
                    Sair
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderDashboard;