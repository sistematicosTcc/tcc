import React, {useContext} from "react";
import { UserContext } from "../../../contexts/UserContexts";

export const LoginArea = () => {
  const {setRegisterEmail, setRegisterPassword, setLoginEmail, setLoginPassword, register, login, sendVerification} = useContext(UserContext)
  return (
    <>
      <div>
        <h1>faca login em sua conta</h1>
        <button> fazer login com o google</button>
        <p>ou</p>
        <form>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
          </div>
          <button id="token" onClick={register}>
            criar
          </button>
        </form>
      </div>
      <button onClick={sendVerification}>Verificando email</button>
      <div>
        <h1>login</h1>
        <form>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={login}>logar</button>
        </form>
      </div>
    </>
  );
};

export default LoginArea;
