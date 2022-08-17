import Api from "../../../Api";
import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebaseConfig";
export const LoginArea = () => {
  //onReceiveGoogle parentses
  // const actionLoginGoogle = async () => {
  //   let result = await Api.googleLogar();

  //   if (result) {
  //     onReceiveGoogle(result.user);
  //   } else {
  //     alert("error");
  //   }
  //};
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div>
        <h1>faca login em sua conta</h1>
        <button> fazer login com o google</button>
        {/*actionLoginGoogle*/}
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
          <button onClick={register}>criar</button>
        </form>
      </div>
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
      <div>
        <h2>user Logged in: --- {user?.email} --- </h2>
        <button onClick={logout}>Sign Out</button>
      </div>
    </>
  );
};

export default LoginArea;
