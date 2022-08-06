/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import './login.css';

import React, { useState } from "react"; 
import Axios from "axios";

import Fgt from "../../images/foguete.png"


export const Login = () =>{

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  function login (e){
    e.preventDefault();
    
    Axios.post('http://localhost:3333/login', {
        email: email, 
        senha: senha
    }).then((response) => {
        console.log(response.data)
        if(response.data[0] != null){
            setLoginStatus(response.data.message)
        } else{
            setLoginStatus(response.data[0].email)
        }
    })
  }

  return(
    <>
      <Header />
      <main>
        <div class="config_txt">
          <h1>Entre na sua conta</h1>
          <form>
            <h3>Email</h3>
              <input type="email" placeholder="Digite seu Email"  id="input-email" onChange={(e) => {
                    setEmail(e.target.value);
                    }} />
            <div class="space">
              <h3> Senha </h3>
              <input type = "text" placeholder="Digite sua Senha" id="password"onChange={(e) => {
                    setSenha(e.target.value);
                    }} />
                <Link to="/senha">
                  <button id="tokenSenha"> {/* adicionar um <Link> tem Prioridade */}
                    Redefinição de senha
                  </button>
                </Link>
            </div>
            <div class="buttonDivision">
                  <button class="Continue-button" onClick={login}>
                    Entrar
                  </button>
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

        <h1>{loginStatus}</h1>
      </main>
    </>
  );
}