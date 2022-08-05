import Header from "../../../component/header/header";
import "./style.css";

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad2.png";

import React, { useState, useRef } from "react";
import Axios from "axios";

import emailjs from "@emailjs/browser";

export const Cadastro2 = () => {

  const [email, setEmail] = useState("");
  const form = useRef();

  function verifyEmail(e) {
    e.preventDefault();
      Axios.post('http://localhost:3333/email', {
          email: email
      }).then((response) => {
        
          if(response.data[0] != null){
              sendEmail(response.data)
              alert('Email foi enviado com sucesso!')
          } else{
              alert('Email não cadastrado')
          }
      })
  }

  function sendEmail(e) {

    emailjs
      .sendForm(
        "service_ajllfkb",
        "template_76ya9uc",
        form.current,
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
          <form onSubmit={verifyEmail} ref={form}>
            <div class="division">
              <input type="text" placeholder = "Digite seu email"onChange={(e) => {
                    setEmail(e.target.value)}}
                id="inputEmail"
                name="email"
              />
              <br />
              <button id="token" type="submit">
                Enviar o Token de Verificação
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
