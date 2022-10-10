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

export const UserContext = createContext();

export function UserStorage({ children }) {
  const navigate = useNavigate();

  const [userLogado, setUserLogado] = useState(null);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [real, setReal] = useState(0);

  // --------------------------Moedas const-----------------------------
  const [tokenBitCoin, setTokenBitCoin] = useState(0);
  const [tokenEthereum, setTokenEthereum] = useState(0);
  const [tokenUSDCoin, setTokenUSDCoin] = useState(0);
  const [tokenBNB, setTokenBNB] = useState(0);
  const [tokenPolygon, setTokenPolygon] = useState(0);
  const [tokenXRP, setTokenXRP] = useState(0);
  const [tokenDogeCoin, setTokenDogeCoin] = useState(0);

  const Coins = [
    {
      id: 0,
      nome: "BitCoin",
      token: parseFloat(tokenBitCoin),
      preco: 103000,
    },
    {
      id: 1,
      nome: "Ethereum",
      token: parseFloat(tokenEthereum),
      preco: 8200,
    },
    {
      id: 2,
      nome: "USD Coin",
      token: parseFloat(tokenUSDCoin),
      preco: 5.20 ,//dolar hoje
    },
    {
      id: 3,
      nome: "BNB",
      token: parseFloat(tokenBNB),
      preco: 103270,
    },
    {
      id: 4,
      nome: "Polygon",
      token: parseFloat(tokenPolygon),
      preco: 0.24,
    },
    {
      id: 5,
      nome: "XRP",
      token: parseFloat(tokenXRP),
      preco: 1.75,
    },
    {
      id: 6,
      nome: "Dogecoin",
      token: parseFloat(tokenDogeCoin),
      preco: 0.32,
    },
  ];

  // --------------------------Carteira-----------------------------
  const ganhe1000Gratis = () => {
    setReal(real + 1000);
  };

  const comprarTaxaZero = (
    valorEmReal,
    valorEmToken,
    nomeToken,
  ) => {

    const carteiraRealAtualizada = real - valorEmReal;
    if (carteiraRealAtualizada < 0) {
      alert("Saldo Insuficiente")
      return;
    }
    setReal(carteiraRealAtualizada);

    if (nomeToken === "BitCoin") {
      setTokenBitCoin(tokenBitCoin + valorEmToken);
      
    } else if (nomeToken === "Ethereum") {
      setTokenEthereum(tokenEthereum + valorEmToken);
      
    } else if (nomeToken === "USD Coin") {
      setTokenUSDCoin(tokenUSDCoin + valorEmToken);
      
    } else if (nomeToken === "BNB") {
      setTokenBNB(tokenBNB + valorEmToken);
      
    } else if (nomeToken === "Polygon") {
      setTokenPolygon(tokenPolygon + valorEmToken);
      
    } else if (nomeToken === "XRP") {
      setTokenXRP(tokenXRP + valorEmToken);
      
    } else if (nomeToken === "Dogecoin") {
      setTokenDogeCoin(tokenDogeCoin + valorEmToken);
      
    }

    var localArrayTransacao = JSON.parse(localStorage.getItem("Historico"))||[]

    localArrayTransacao.push({
      nome: nomeToken,
      preco:valorEmReal,
      quantidade:valorEmToken,
      data: new Date()
    })

    localStorage.setItem("Historico",JSON.stringify(localArrayTransacao))


  }

  const VenderTaxaZero = (
    valorEmToken,
    valorEmReal,
    nomeToken,
  ) => {
    const carteiraRealAtualizada = real + parseFloat(valorEmReal);

    if (nomeToken === "BitCoin") {
      if (tokenBitCoin - valorEmToken < 0) {
        alert("Bitcoin insuficiente")
        return;
      } else {
        setTokenBitCoin(tokenBitCoin - valorEmToken);
      }

    } else if (nomeToken === "Ethereum") {
      if (tokenEthereum - valorEmToken < 0) {
        alert("Ethereum insuficiente")
        return;
      } else {
        setTokenEthereum(tokenEthereum - valorEmToken);
      }

    } else if (nomeToken === "USD Coin") {
      if (tokenUSDCoin - valorEmToken < 0) {
        alert("USD Coin insuficiente")
        return;
      } else {
        setTokenUSDCoin(tokenUSDCoin - valorEmToken);
      }

    } else if (nomeToken === "BNB") {
      if (tokenBNB - valorEmToken < 0) {
        alert("BNB insuficiente")
        return;
      } else {
        setTokenBNB(tokenBNB - valorEmToken);
      }

    } else if (nomeToken === "Polygon") {
      if (tokenPolygon - valorEmToken < 0) {
        alert("Polygon insuficiente")
        return;
      } else {
        setTokenPolygon(tokenPolygon - valorEmToken);
      }

    } else if (nomeToken === "XRP") {
      if (tokenXRP - valorEmToken < 0) {
        alert("XRP insuficiente")
        return;
      } else {
        setTokenXRP(tokenXRP - valorEmToken);
      }

    } else if (nomeToken === "Dogecoin") {
      if (tokenDogeCoin - valorEmToken < 0) {
        alert("Dogecoin insuficiente")
        return;
      } else {
        setTokenDogeCoin(tokenDogeCoin - valorEmToken);
      }
    }

    setReal(carteiraRealAtualizada);

    var localArrayTransacao = JSON.parse(localStorage.getItem("Historico"))||[]

    localArrayTransacao.push({
      nome: nomeToken,
      preco:valorEmReal,
      quantidade:valorEmToken,
      data: new Date()
    })

    localStorage.setItem("Historico",JSON.stringify(localArrayTransacao))

  }
  // --------------------------CADASTRO E LOGIN-----------------------------
  const register = async (e) => {
    e.preventDefault();
    try {
      const senha = document.getElementById("senha");
      var senhaValor = senha.value;
      const senhaConfirma = document.getElementById("passwordConfirm");
      var confirmaValor = senhaConfirma.value;
      if (confirmaValor !== senhaValor) {
        alert("as senhas nao conferem");
      } else
        createUserWithEmailAndPassword(authf, registerEmail, registerPassword)
          .then(() => {
            sendEmailVerification(authf.currentUser);
            console.log(sendEmailVerification);
            alert("email enviado : " + registerEmail);
          })
          .catch((err) => {
            alert("Credenciais inválidas.");
            console.log("erro em catch 1: " + err.message);
          });
    } catch (err) {
      console.log("erro em catch 2: " + err.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(authf, loginEmail, loginPassword)
        .then((userCredential) => {
          console.log("entrou");
          const user = userCredential.user;

          if (user.emailVerified) {
            const nomeUsuario = userCredential.user.email;
            console.log(nomeUsuario);
            setUserLogado(true);
            window.localStorage.setItem("userlogado", JSON.stringify(true));
            navigate("/dashboard");
          } else {
            alert("Verifique seu Email");
          }
        })
        .catch(() => {
          alert("Email/Senha incorretos");
        });
    } catch (err) {
      alert("Digite uma senha ou email valido");
      console.log("erro em catch login: " + err);
    }
  };

  const logout = () => {
    try {
      setUserLogado(null);
      window.localStorage.setItem("userlogado", JSON.stringify(false));
    } catch (error) {
      console.log(error);
    }
  };

  const sendVerification = async () => {
    var user = authf.currentUser;
    try {
      sendEmailVerification(user);
    } catch (e) {
      console.log("erro em sendVerification = " + e);
      alert("Digite o Email Corretamente");
    }
  };

  const reset = async (e) => {
    e.preventDefault();
    try {
      sendPasswordResetEmail(authf, loginEmail)
        .then(() => {
          alert("Email enviado");
        })
        .catch((err) => {
          alert("Email não cadastrado");
          console.log(err);
        });
    } catch (e) {
      console.log(e);
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
        ganhe1000Gratis,
        comprarTaxaZero,
        VenderTaxaZero,
        Coins,
        real,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
