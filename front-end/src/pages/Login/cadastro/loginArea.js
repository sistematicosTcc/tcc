import React, {useContext} from "react";
import { UserContext } from "../../../contexts/UserContexts";
import { Link } from "react-router-dom";
import FgtCad from "../../../images/fgt_cad1.png"
import Header from "../../../component/header/header";

export const LoginArea = () => {
  const {
    setRegisterEmail, 
    setRegisterPassword, 
    setLoginEmail, 
    setLoginPassword, 
    register, 
    login, 
    sendVerification} = useContext(UserContext)

    const handleClick = (event) => {
      const registrar = register;
      const value = sendVerification;
    };

  return (
    <>
    <Header />
    <main>
      <div class="config_txt">
        <h1>Crie Sua Conta</h1>
        {/* <button> fazer login com o google</button>
        <p>ou</p> */}
        <form>
            <input
              type="text"
              placeholder = "Digite seu Email"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            /> <br/>

            <input
              type="password"
              placeholder = "Digite sua Senha"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            /> <br/>

            <input
              type="password"
              placeholder="Digite sua Senha novamente"
              id="passwordConfirm"
            /> <br/>    
        </form>
        <div class="buttonDivision">
        {/* <button onClick={sendVerification}>Verificando email</button> */}
        {/* <a  onClick={sendVerification}>
                Reenviar o Email
            </a> */}

              <button id="token" type="submit" onClick={sendVerification}>
                Reenviar o Email de Verificação
              </button>
          <Link to="/cad3" className="Link-Margin">
            <button class="Continue-button" onClick={handleClick}>
                Registrar
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
};

export default LoginArea;
