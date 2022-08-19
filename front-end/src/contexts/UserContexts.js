import { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";

import { authf } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext();

export function UserStorage({ children }) {

  const navigate = useNavigate();

  const [userLogado, setUserLogado] = useState(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(authf, registerEmail, registerPassword);
      sendEmailVerification(authf.currentUser)
        .then(() => {
          alert("email enviado : " + registerEmail);
        })
        .catch((e) => {
          console.log("erro em: " + e.message);
        });
    } catch (e) {
      console.log("erro em: " + e.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(authf, loginEmail, loginPassword).then(
        (userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            setUserLogado(true);
            navigate("/dashboard")
          } else {
            alert("Verifique seu email para prosseguir");
            return;
          }
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const sendVerification = async () => {
    var user = authf.currentUser;
    sendEmailVerification(user)
      .then(() => {
        alert("verificacao enviada");
      })
      .catch((error) => {
        alert("error = " + error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        register,
        login,
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
