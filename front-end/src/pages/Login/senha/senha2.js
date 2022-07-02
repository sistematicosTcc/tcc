import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtSenha from "../../../images/fgt_senha2.png"

import React from "react";

export const Senha2 = () =>{
  return(
    <>
      <Header />
      <main id="redef2">
        <div class="config_txt">
          <h1>Esqueceu sua Senha</h1>
          <form>
            <input type="password" placeholder="Digite sua Senha" id="password" />
              <br />
              <input
                type="password"
                placeholder="Digite sua Senha novamente"
                id="passwordConfirm"
              />
            <div class="buttonDivision">
            <Link to="/senha" className="Link-Margin">
                <button class="Continue-button">
                  Voltar
                </button>
              </Link>
              <Link to="/senha3" className="Link-Margin">
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

export default Senha2;
