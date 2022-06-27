import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtSenha from "../../../images/fgt_senha3.png"

export const Senha3 = () =>{
  return (
    <>
      <Header />
        <main id="redef3">
          <div class="config_txt">
            <h1>Sucesso</h1>
            <h2 class="texto_cad3">
              Sua senha foi redefinida com sucesso. 
              Clique no botão e retorne ao menu.
            </h2>
            <div class="buttonDivision">
              <button class="Continue-button bigButton"><Link to="/login">Entrar</Link></button>
            </div>
          </div>
          <div class="img_fgt">
            <img src={FgtSenha} alt="" class="fgt"/>
          </div>
        </main>
    </>
  );
}

export default Senha3;
