/* eslint-disable jsx-a11y/alt-text */
import Header from "../../../component/header/header";
import './style.css';

import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad3.png"
import Moon from "../../../images/moon.png"

export const Cadastro3 = () =>{
  return (
    <>
      <Header />
    <main id="main4">
      <div class="config_txt">
        <h1>Sucesso</h1>
          <h2 class="texto_cad3">
            Sua conta na CRYPTOP foi criada com sucesso.
            Você pode entrar na sua conta no canto superior direito ou clicando no
            botão entrar.
          </h2>
        <div class="buttonDivision">
          <Link to="/login" className="Link-Margin">
            <button class="Continue-button" id="bigButton">
              Entrar
            </button>
          </Link>
        </div>
      </div>
      <div class="img_fgt">
        <img src={FgtCad} alt="" class="fgt"/>
        <div class="moon_img">
          <img src={Moon} class="moon" />
        </div>
      </div>
    </main>
    </>
  );
}

export default Cadastro3;
