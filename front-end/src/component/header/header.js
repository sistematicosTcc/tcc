import './header.css'
import { Link } from "react-router-dom";
import OptDown from "../../images/opt_down.png"
import Logo from "../../images/logo_crp.png"

import React from "react";

function Header(){
  return(
    <>
      <header class="head">
        <div class="bet">
            <Link to="/" >
              <img class="head-logo" src={Logo} alt="logo"/>
            </Link>
          <ul>
            <li>
              <img class="header-opt" src={OptDown} alt="logo" />
              <ul>
                <li><Link to="/" className='options'>Exchange</Link></li>
                <li><Link to="/" className='options'>Trust Wallet</Link></li>
              </ul>
            </li>
          </ul>
          <nav class="header-first">
            <Link to="/" className='header-item'>Compre Crypto</Link>
            <Link to="/" className='header-item'>Mercado</Link>
            <Link to="/" className='header-item'>Trade</Link>
            <Link to="/" className='header-item'>NFT</Link>
          </nav>
        </div>
        <nav class="header-second">
        <Link to="/login" className='header-item'>Entrar</Link>
          <form action="/">
              <Link to="/cad">
                <button class="header-button" >
                    Registrar
                </button>
              </Link>
          </form>
        </nav>
      </header>
    </>
  )
}

export default Header;