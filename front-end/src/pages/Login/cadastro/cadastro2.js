import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad2.png"

export const Cadastros2 = () =>{
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
              <button id="token">Reenviar o Token de Verificação</button>
            </div>
            <div class="division">
              <h2>Token</h2>
              <input type="text" id="tokenNum" /> <br />
            </div>
            <div class="buttonDivision">
              <button class="Continue-button"><Link to="/cad">Voltar</Link></button>
              <button class="Continue-button"><Link to="/cad3">Continuar</Link></button>
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

export default Cadastros2;
