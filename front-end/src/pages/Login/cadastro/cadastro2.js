import Header from "../../../component/header/header";
import "./style.css";

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad2.png";

import React, { useState } from "react";

import emailjs from "@emailjs/browser";

export const Cadastro2 = () => {
  function sendEmail(e) {

    e.preventDefault();


    emailjs
      .sendForm(
        "service_ajllfkb",
        "template_76ya9uc",
        e.target,
        "ufx27yWKy1INzZZ-k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />
      <main id="main2">
        <div class="config_txt">
          <h1>Verificação de Cadastro</h1>
          <form onSubmit={sendEmail}>
            <div class="division">
              <input
                type="email"
                placeholder="Digite seu Email"
                id="inputEmail"
                name="email"
              />
              <br />
              <button id="token" type="submit">
                Reenviar o Token de Verificação
              </button>
            </div>
          </form>
          <div class="division">
            <h2>Token</h2>
            <input type="text" id="tokenNum" /> <br />
          </div>
          <div class="buttonDivision">
            <Link to="/cad" className="Link-Margin">
              <button class="Continue-button">Voltar</button>
            </Link>
            <Link to="/cad3" className="Link-Margin">
              <button class="Continue-button">Continuar</button>
            </Link>
          </div>
        </div>
        <div class="img_fgt">
          <img src={FgtCad} alt="fogueteimg" class="fgt" />
        </div>
      </main>
    </>
  );
};

export default Cadastro2;
