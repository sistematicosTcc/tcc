import React, { useRef, useState } from "react";


import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../../firebaseConfig";

import { useNavigate } from "react-router-dom";
export const LoginArea = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const navigate = useNavigate();
  const auth = getAuth();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("email enviado" + registerEmail);
        })
        .catch((e) => {
          console.log("erro em:" + e.message);
        });
    } catch (e) {
      console.log("erro em:" + e.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ).then(() => {
        if (!getAuth().currentUser.emailVerified) {
          alert('Verifique seu email para prosseguir')
          return;
        } else {
          navigate("/dashboard").alert('Usuario logado com sucesso');
        }
      });
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
