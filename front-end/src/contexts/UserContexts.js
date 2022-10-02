import { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";

import { authf } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { stringify } from "@firebase/util";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const navigate = useNavigate();

  const [userLogado, setUserLogado] = useState(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [carteiraAgora, setcarteiraAgora] = useState(0);
  const [moedaAgora, setMoedaAgora] = useState(0);


  const carteira={
      valorAtual: carteiraAgora,
      moeda:moedaAgora
  }
  
// --------------------------Carteira-----------------------------
    const ganhe1000Gratis =()=>{
      var maisMil = carteira.valorAtual
      console.log(maisMil)
      var milao = maisMil + 1000.00
      setcarteiraAgora(milao)
    }

    const comprarTaxaZero=()=>{
      var valorEspera = JSON.parse(window.localStorage.getItem("Carteiras"))

      var valorAgora = carteira.valorAtual
      var valorEmReal = valorEspera.valorReal
      var valor1 = (valorAgora - valorEmReal)
      
      var CoinAgora = carteira.moeda
      
      var valorEmToken = parseInt(valorEspera.valorToken)
      console.log(valor2)
      var valor2 = parseInt(valorEmToken + CoinAgora)
      // var valor2 = (valorEmTokenInvisivel)

      setcarteiraAgora(valor1)
      setMoedaAgora(valor2)
    }

    const VendaTaxaZero =()=>{
      
    }
// --------------------------CADASTRO E LOGIN-----------------------------
  const register = async (e) => {
    e.preventDefault();
    try {
      const senha = document.getElementById("senha")
      var senhaValor = senha.value
      const senhaConfirma = document.getElementById("passwordConfirm")
      var confirmaValor = senhaConfirma.value
      if (confirmaValor !== senhaValor){
        alert('as senhas nao conferem')
      } else
      createUserWithEmailAndPassword(authf, registerEmail, registerPassword)
        .then(() => {
          sendEmailVerification(authf.currentUser);
          console.log(sendEmailVerification);
          alert("email enviado : " + registerEmail);
        })
        .catch((err) => {
          alert("Credenciais inválidas.")
          console.log("erro em catch 1: " + err.message);
        });

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
      ).catch(() => {
        alert("Email/Senha incorretos");
      })
    } catch (err) {
      alert("Digite uma senha ou email valido")
      console.log("erro em catch login: " + err);
    }
  };

  const logout = () =>{
    try {
      setUserLogado(null)
      window.localStorage.setItem("userlogado", JSON.stringify(false));
    } catch (error) {
      console.log(error)
    }
  }

  const sendVerification = async () => {
    var user = authf.currentUser;
    try {
      sendEmailVerification(user);
    } catch (e) {
      console.log("erro em sendVerification = " + e)
      alert("Digite o Email Corretamente");
    }
  };


  const reset = async (e) => {
    e.preventDefault();
    try {
      sendPasswordResetEmail(authf, loginEmail).then(() => {
        alert("Email enviado")
      }).catch((err) => {
        alert("Email não cadastrado")
        console.log(err)
      })
    } catch (e) {
      console.log(e)
    }
  }
 


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
        logout,
        login,
        loginEmail,
        sendVerification,
        setLoginEmail,
        setLoginPassword,
        setRegisterEmail,
        setRegisterPassword,
        userLogado,
        reset,
        carteira,
        comprarTaxaZero,
        ganhe1000Gratis
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
