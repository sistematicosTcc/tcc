/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import './login.css';

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
              <button id="token"><Link to="/senha">Redefinição de senha</Link></button>
            </div>
            <div class="buttonDivision">
              <button class="Continue-button"><Link to="#">Continuar</Link></button>
              <button class="Continue-button"> <Link to="/cad">Cadastre-se</Link></button>
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