import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import Header from '../../component/header/header';
import Fgt from "../../images/foguete.png"
import './login.css';
import { Link } from "react-router-dom";


export const Login = () => {

  const { setLoginEmail, setLoginPassword, login} = useContext(UserContext)

  return (
    <>
      <Header />
      <main>
        <div class="config_txt">
          <div>
            <h1>Entre na sua Conta</h1>
            <form>
              <div class="space">
                <h3>Email</h3>
                <input
                  type="email" placeholder="Digite seu Email"  id="inputEmail"
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
              </div>
              <div class="space">
                <h3>Senha</h3>
                <input
                  type="text" placeholder="Digite sua Senha" id="password"
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                />
                <Link to="/senha">
                  <button id="tokenSenha"> {/* adicionar um <Link> tem Prioridade */}
                    Redefinição de senha
                  </button>
                </Link>
              </div>
              <div class="buttonDivision">
                <button class="Continue-button Link-Margin" onClick={login}>
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
        </div>
        <div class="img_fgt">
          <img src={Fgt} class="fgt" />
          <h1 class="subImg">CRYP<span class="top">TOP</span></h1>
        </div>
      </main>
    </>
  );
}