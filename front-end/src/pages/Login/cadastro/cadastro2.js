import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad2.png"

import React from "react";

import emailjs from 'emailjs-com';

export const Cadastro2 = () =>{

  //{{to_name}} do emailjs é preciso trocar o ID da variave l{{____}} anerior

  function sendEmail(e){

    e.preventDefault();

    emailjs.sendForm('service_ajllfkb', 'service_ajllfkb', e.target, 'ufx27yWKy1INzZZ-k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <Header />
      <main id="main2">
        <div class="config_txt">
          <h1>Verificação de Cadastro</h1>
          <form>
            <div class="division">
              <input
                type="email"
                placeholder="Digite seu Email"
                id="inputEmail"
              />
              <br />
              <button id="token" onClick={sendEmail()} >Reenviar o Token de Verificação</button>
            </div>
            <div class="division">
              <h2>Token</h2>
              <input type="text" id="tokenNum" /> <br />
            </div>
            <div class="buttonDivision">
            <Link to="/cad" className="Link-Margin">
                <button class="Continue-button" >
                    Voltar
                </button>
              </Link>
              <Link to="/cad3" className="Link-Margin">
                <button class="Continue-button">
                    Continuar
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div class="img_fgt">
          <img src={FgtCad} alt="fogueteimg" class="fgt" />
        </div>
      </main>    
    </>
  );
}

export default Cadastro2;
