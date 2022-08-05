import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad1.png"

import React, { useState } from "react"; 
import Axios from "axios";

export const Cadastro = () => {
    const [nomeReg, setNomeReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [senhaReg, setSenhaReg] = useState("");
 
    function register (){
        Axios.post('http://localhost:3333/cad', {
            nome: nomeReg,
            email: emailReg, 
            senha: senhaReg
        }).then((response) => {
            console.log(response)
        })
    }
    
  return (
    <>
      <Header />
      <main>
        <div class="config_txt">
          <h1>Crie Sua Conta</h1>
          <form>
          <input type="text" placeholder = "Digite seu nome" onChange={(e) => {
                    setNomeReg(e.target.value);
                    }}  /> <br/>
            <input type="text" placeholder = "Digite seu email"onChange={(e) => {
                    setEmailReg(e.target.value);
                    }}  /> <br/>
            <input type="password" placeholder = "Digite seu Senha" onChange={(e) => {
                    setSenhaReg(e.target.value);
                    }}  /> <br/>
            <input
              type="password"
              placeholder="Digite sua Senha novamente"
              id="passwordConfirm"
            /> <br/>
          </form>
          <div class="buttonDivision">
          <Link to="/cad2" className="Link-Margin">
            <button class="Continue-button" onClick={register}>
                Continuar
            </button>
          </Link>
          </div>
        </div>      
        <div class="img_fgt">
          <img src={FgtCad} alt="fogueteimg" class="fgt" />
        </div>
      </main>
  </>
  );
}

export default Cadastro;
