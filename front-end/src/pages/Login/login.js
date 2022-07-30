/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import './login.css';

import React from "react";

import Fgt from "../../images/foguete.png"


export const Login = () =>{
  return(
    <>
      <Header />
      <main>
        <div class="config_txt">
          <h1>Entre na sua conta</h1>
          <form>
            <h3>Email</h3>
              <input type="email" placeholder="Digite seu Email" id="input-email" />
            <div class="space">
              <h3> Senha </h3>
              <input type="password" placeholder="Digite sua Senha" id="password" />
                <Link to="/senha">
                  <button id="tokenSenha">
                    Redefinição de senha
                  </button>
                </Link>
            </div>
            <div class="buttonDivision">
                <Link to="/dashboard" className="Link-Margin">
                  <button class="Continue-button">
                    Entrar
                  </button>
                </Link>
                <Link to="/cad" className="Link-Margin">
                  <button class="Continue-button">
                    Cadastre-se
                  </button>
                </Link>
            </div>
          </form>
        </div>
        <div class="img_fgt">
          <img src={Fgt} class="fgt" />
          <h1 class="subImg">CRYP<span class="top">TOP</span></h1>
        </div>
      </main>
    </>
  );
}