import Api from "../../../Api";
import React from "react";

export const LoginArea = ({ onReceiveGoogle }) => {
  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();

    if (result) {
      onReceiveGoogle(result.user);
    } else {
      alert("error");
    }
  };
  return (
    <div>
      <h1>faca login em sua conta</h1>
      <button> fazer login com o facebook</button>
      <button onClick={actionLoginGoogle}> fazer login com o google</button>
      <p>ou</p>
      <form>
        <div>
          <label>E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default LoginArea;
