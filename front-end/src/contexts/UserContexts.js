import { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";

import { authf } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const navigate = useNavigate();

  const [userLogado, setUserLogado] = useState(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // --------------------------CADASTRO E LOGIN-----------------------------
  const register = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(authf, registerEmail, registerPassword)
        .then(() => {
          console.log(sendEmailVerification);
          alert("email enviado : " + registerEmail);
          navigate("/cad3");
        })
        .catch((err) => {
          alert("Senha com caracteres insuficiente/ email inválido")
          console.log("erro em catch 1: " + err.message);
        });
      sendEmailVerification(authf.currentUser);
    } catch (err) {
      console.log("erro em catch 2: " + err.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(authf, loginEmail, loginPassword).then(
        (userCredential) => {
          console.log("entrou");
          const user = userCredential.user;

          if (user.emailVerified) {
            const nomeUsuario = userCredential.user.email
            console.log(nomeUsuario)
            setUserLogado(true);
            window.localStorage.setItem("userlogado", JSON.stringify(true));
            navigate("/dashboard");
          } else {
            alert("Verifique seu Email")
          }
        }
        ).catch(() =>{
        alert("Email/Senha incorretos");
      })
    } catch (err) {
      alert("Digite uma senha ou email valido")
      console.log("erro em catch login: "+ err);
    }
  };

  

  const sendVerification = async () => {
    var user = authf.currentUser;
    try {
      sendEmailVerification(user);
    } catch (e) {
      console.log("erro em sendVerification = "+e)
      alert("Digite o Email Corretamente"); 
    }
  };

  useEffect(() => {
    const userLoginOn = JSON.parse(window.localStorage.getItem("userlogado"));
    if (userLoginOn) {
      setUserLogado(true);
      navigate("/dashboard");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        register,
        login,
        loginEmail,
        sendVerification,
        setLoginEmail,
        setLoginPassword,
        setRegisterEmail,
        setRegisterPassword,
        userLogado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
