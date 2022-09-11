import "./header.css";
import { Link } from "react-router-dom";
import OptDown from "../../images/opt_down.png";
import Logo from "../../images/logo_crp.png";
import UserLogo from "../../images/profile-simple.png";

import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";

function HeaderLogin() {
  const { loginEmail } = useContext(UserContext);

  return (
    <>
      <header class="head">
        <div class="bet">
          <Link to="/homeLogin">
            <img class="head-logo" src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <img class="header-opt" src={OptDown} alt="logo" />
              <ul>
                <li>
                  <Link to="/teste" className="options">
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link to="/wallet" className="options">
                    Trust Wallet
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div class="header-first">
            <Link to="/dasboard" className="header-item">
              Compre Crypto
            </Link>
            <Link to="/dasboard" className="header-item">
              Mercado
            </Link>
            <Link to="/teste" className="header-item">
              Trade
            </Link>
            <Link to="/" className="header-item">
              NFT
            </Link>
          </div>
        </div>
        <div class="header-second">
          <div className="profile">
            {/* <div className="profile-photo">
                <img src={UserLogo} alt="perfil simples"/>
            </div> */}
            <h5>{loginEmail}</h5>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderLogin;
