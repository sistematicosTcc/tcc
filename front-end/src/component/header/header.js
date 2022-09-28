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
                <li><Link to="/login" className='options'>Exchange</Link></li>
                <li><Link to="/login" className='options'>CripTop Wallet</Link></li>
                <li><Link to="/login" className='options'>Sobre Nós</Link></li>
                <li><Link to="/login" className='options'>Ajuda</Link></li>
                <li><Link to="/login" className='options'>Educação</Link></li>
                <li><Link to="/login" className='options'>Transparência</Link></li>
              </ul>
            </li>
          </ul>
          <div class="header-first">
            <Link to="/login" className='header-item'>Compre Crypto</Link>
            <Link to="/aprender" className='header-item'>Mercado</Link>
            <Link to="/nft" className='header-item'>NFT</Link>
          </div>
        </div>
        <div class="header-second">
        <Link to="/login" className='header-item'>Entrar</Link>
          <form action="/">
              <Link to="/cad">
                <button class="header-button" >
                    Registrar
                </button>
              </Link>
          </form>
        </div>
      </header>
    </>
  )
}

export default Header;

