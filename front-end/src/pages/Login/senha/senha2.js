import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtSenha from "../../../images/fgt_senha2.png"

export const Senha2 = () =>{
  return(
    <>
      <Header />
      <main id="redef2">
        <div class="config_txt">
          <h1>Esqueceu sua Senha</h1>
          <form>
            <input type="password" placeholder="Digite seu Senha" id="password" />
              <br />
              <input
                type="password"
                placeholder="Digite seu Senha novamente"
                id="passwordConfirm"
              />
            <div class="buttonDivision">
              <button class="Continue-button"><Link to="/senha">Voltar</Link></button>
              <button class="Continue-button"><Link to="/senha3">Continuar</Link></button>
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
