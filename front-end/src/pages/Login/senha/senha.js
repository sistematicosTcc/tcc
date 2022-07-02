import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtSenha from "../../../images/fgt_senha1.png"

import React from "react";

export const Senha = () =>{
  return (
    <>
      <Header />
      <main id="main3">
        <div class="config_txt">
          <h1>Esqueceu sua Senha</h1>
          <form>
            <div class="division">
              <input
                type="email"
                placeholder="Digite seu Email"
                id="inputEmail"
              />
              <br />
              <button id="token">Reenviar o Token de Verificação</button>
            </div>
            <div class="division">
              <h2>Token</h2>
              <input type="text" id="tokenNum" /> <br />
            </div>
            <div class="buttonDivision">
              <Link to="/login" className="Link-Margin">
                <button class="Continue-button">
                  Voltar
                </button>
              </Link>
              <Link to="/senha2" className="Link-Margin">
                <button class="Continue-button">
                  Continuar
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div class="img_fgt">
          <img src={FgtSenha} alt="fogueteimg" class="fgt"/>
        </div>
      </main>
    </>
  );
}

export default Senha;