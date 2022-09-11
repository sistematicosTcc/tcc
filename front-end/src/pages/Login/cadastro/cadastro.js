import React, {useContext} from "react";
import { UserContext } from "../../../contexts/UserContexts";
import FgtCad from "../../../images/fgt_cad1.png"
import Header from "../../../component/header/header";

export const Cadastro = () => {
  const {
    setRegisterEmail, 
    setRegisterPassword,  
    register,  
    sendVerification} = useContext(UserContext)

    const handleClick = (e) => {
      register(e);
      sendVerification(e);
    };

  return (
    <>
    <Header />
    <main>
      <div class="config_txt">
        <h1>Crie Sua Conta</h1>
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
              minlength="number6"
              placeholder = "Digite sua Senha"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            /> <br/>

            <input
              type="password"
              minlength="number6"
              placeholder="Digite sua Senha novamente"
              id="passwordConfirm"
            /> <br/>    
            <div class="buttonDivision">
              <button id="token" type="submit" onClick={sendVerification}>
                Reenviar o Email de Verificação
              </button>
              </div>
            <div class="buttonDivision">
            <button class="Continue-button" onClick={handleClick}>
                Registrar
            </button>
            </div>
          
        </form>
      </div>
        <div class="img_fgt">
          <img src={FgtCad} alt="fogueteimg" class="fgt" />
        </div>
      </main>
    </>
  );
};

export default Cadastro;
