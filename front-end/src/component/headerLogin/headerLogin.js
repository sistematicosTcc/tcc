import "./headerLogin.css";
import { Link } from "react-router-dom";
import OptDown from "../../images/opt_down.png";
import Logo from "../../images/logo_crp.png";
// import UserLogo from "../../images/profile-simple.png";

import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";

function HeaderLogin() {

  const { loginEmail,logout,ganhe1000Gratis } = useContext(UserContext);

  const openMenu = () => {
    const MenuStatus = document.querySelector(".menu-modal-home");

    if (MenuStatus.style.display === "flex"){
      document.querySelector(".menu-modal-home").style.display = "none";
    } else {
      document.querySelector(".menu-modal-home").style.display = "flex";
    }
  };


  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      <header class="head">
        <div class="bet">
          <Link to="/homeLogin">
            <img class="head-logo" src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <img class="header-opt" src={OptDown} alt="logo" />
              <ul>
              <li><Link to="/dashboard" className='options'>Dashboard</Link></li>
                <li><Link to="/wallet" className='options'>CripTop Wallet</Link></li>
                <li><Link to="/sobreOn" className='options'>Sobre Nós</Link></li>
                <li><Link to="/ajudaTextOn" className='options'>Ajuda</Link></li>
                <li><Link to="/educacaoOn" className='options'>Educação</Link></li>
                <li><Link to="/transparenciaOn" className='options'>Transparência</Link></li>
              </ul>
            </li>
          </ul>
          <div class="header-first">
            <Link to="/exchange" className='header-item'>Compre Crypto</Link>
            <Link to="/aprenderOn" className='header-item'>Mercado</Link>
            <Link to="/nftOn" className='header-item'>NFT</Link>
          </div>
        </div>
        <div class="header-second">
          <div className="profile">
            <h5>{loginEmail}</h5>
          </div>
        </div>
        <button id="menu-button-home" onClick={openMenu}>
          MENU
        </button>
      </header>
      <div class="menu-modal-home">
        <div class="menu-content-home">
          <div>
            <div class="menu-config-home">
              <h4 onClick={ganhe1000Gratis}>GANHE R$1000</h4>
            </div>
            <div class="menu-config-home" onClick={logout}>
                Sair
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLogin;
