import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtSenha from "../../../images/fgt_senha1.png"

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
              <button class="Continue-button"><Link to="/login">Voltar</Link></button>
              <button class="Continue-button"><Link to="/senha2">Continuar</Link></button>
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