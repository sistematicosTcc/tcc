import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad1.png"

export const Cadastro = () => {
  return (
    <>
      <Header />
      <main>
        <div class="config_txt">
          <h1>Crie Sua Conta</h1>
          <form>
            <input type="text" placeholder="Digite seu Nome" /> <br/>
            <input type="email" placeholder="Digite seu Email" id="input-email" /> <br/>
            <input type="password" placeholder="Digite sua Senha" id="password" /> <br/>
            <input
              type="password"
              placeholder="Digite sua Senha novamente"
              id="passwordConfirm"
            /> <br/>
          </form>
          <div class="buttonDivision">
          <Link to="/cad2" className="Link-Margin">
            <button class="Continue-button" >
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
