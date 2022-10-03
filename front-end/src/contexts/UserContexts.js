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
  const [carteiraAgora, setcarteiraAgora] = useState(0);
  const [moedaAgora, setMoedaAgora] = useState(0);

  // --------------------------Moedas const-----------------------------
  const [tokenBitCoin, setTokenBitCoin] = useState(0);
  const [tokenEthereum, setTokenEthereum] = useState(0);
  const [tokenUSDCoin, setTokenUSDCoin] = useState(0);
  const [tokenBNB, setTokenBNB] = useState(0);
  const [tokenPolygon, setTokenPolygon] = useState(0);
  const [tokenXRP, setTokenXRP] = useState(0);
  const [tokenDogeCoin, setTokenDogeCoin] = useState(0);

  const carteira = {
    valorAtual: carteiraAgora,
    moeda: moedaAgora,
  };

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
      preco: 103270,
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
    var maisMil = carteira.valorAtual;
    console.log(maisMil);
    var milao = maisMil + 1000.0;
    setcarteiraAgora(milao);
  };

  const comprarTaxaZero = () => {
    var valorEspera = JSON.parse(window.localStorage.getItem("Carteiras"));

    var valorAgora = carteira.valorAtual;
    console.log(valorAgora)

    var valorEmReal = valorEspera.valorReal;
    const valor1 = valorAgora - valorEmReal;

    var CoinAgora = carteira.moeda;

    var valorEmToken = parseFloat(valorEspera.valorToken);
    var valor2 = parseFloat(valorEmToken + CoinAgora);
    console.log(valor2);

    setcarteiraAgora(valor1);
    setMoedaAgora(valor2);

    const select = document.getElementById("selecionarMoedas");
    const opcaoTexto = select.options[select.selectedIndex].text;

     if (opcaoTexto === "BitCoin") {
      var valorToken = Coins[0].token;
      var bitInvi = valorToken + valorEmToken;

      setTokenBitCoin(bitInvi);

    } else if (opcaoTexto === "Ethereum") {
      var valorToken1 = Coins[1].token;
      var etherInvi = valorToken1 + valorEmToken;

      setTokenEthereum(etherInvi);

    } else if (opcaoTexto === "USD Coin") {
      var valorToken2 = Coins[2].token;
      var usdInvi = valorToken2 + valorEmToken;

      setTokenUSDCoin(usdInvi);

    } else if (opcaoTexto === "BNB") {
      var valorToken3 = Coins[3].token;
      var bnbInvi = valorToken3 + valorEmToken;

      setTokenBNB(bnbInvi);

    } else if (opcaoTexto === "Polygon") {
      var valorToken4 = Coins[4].token;
      var polyInvi = valorToken4 + valorEmToken;

      setTokenPolygon(polyInvi);

    } else if (opcaoTexto === "XRP") {
      var valorToken5 = Coins[5].token;
      var xrpInvi = valorToken5 + valorEmToken;

      setTokenXRP(xrpInvi);

    } else if (opcaoTexto === "Dogecoin") {
      var valorToken6 = Coins[6].token;
      var dogeInvi = valorToken6 + valorEmToken;

      setTokenDogeCoin(dogeInvi);
    }
  }

  const VenderTaxaZero = () => {
  var valorEspera = JSON.parse(window.localStorage.getItem("Carteiras"));

  console.log(valorEspera)
  var valorAgora = carteira.valorAtual;

  var valorEmReal = valorEspera.valorReal;
  const valor1 = Number(valorAgora) + Number(valorEmReal);

  var CoinAgora = carteira.moeda;

  var valorEmToken = parseFloat(valorEspera.valorToken);
  var valor2 = parseFloat(CoinAgora - valorEmToken);
  console.log(valor2);

  setcarteiraAgora(valor1);
  setMoedaAgora(valor2);

  const select = document.getElementById("selecionarMoedas");
  const opcaoTexto = select.options[select.selectedIndex].text;

   if (opcaoTexto === "BitCoin") {
    var valorToken = Coins[0].token;
    var bitInvi = valorToken - valorEmToken;

    setTokenBitCoin(bitInvi);

  } else if (opcaoTexto === "Ethereum") {
    var valorToken1 = Coins[1].token;
    var etherInvi = valorToken1 - valorEmToken;

    setTokenEthereum(etherInvi);

  } else if (opcaoTexto === "USD Coin") {
    var valorToken2 = Coins[2].token;
    var usdInvi = valorToken2 - valorEmToken;

    setTokenUSDCoin(usdInvi);

  } else if (opcaoTexto === "BNB") {
    var valorToken3 = Coins[3].token;
    var bnbInvi = valorToken3 - valorEmToken;

    setTokenBNB(bnbInvi);

  } else if (opcaoTexto === "Polygon") {
    var valorToken4 = Coins[4].token;
    var polyInvi = valorToken4 - valorEmToken;

    setTokenPolygon(polyInvi);

  } else if (opcaoTexto === "XRP") {
    var valorToken5 = Coins[5].token;
    var xrpInvi = valorToken5 - valorEmToken;

    setTokenXRP(xrpInvi);

  } else if (opcaoTexto === "Dogecoin") {
    var valorToken6 = Coins[6].token;
    var dogeInvi = valorToken6 - valorEmToken;

    setTokenDogeCoin(dogeInvi);
  }
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
        carteira,
        ganhe1000Gratis,
        comprarTaxaZero,
        VenderTaxaZero,        
        Coins,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
