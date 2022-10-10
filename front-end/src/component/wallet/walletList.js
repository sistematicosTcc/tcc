import "./walletStyle.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { useState } from "react";
import { useEffect } from "react";

import Bit from "../../images/btc_coin.png";
import Usdt from "../../images/usdt_coin.png";
import Eth from "../../images/eth_coin.png";
import Doge from "../../images/doge_coin.png";
import Bnb from "../../images/bnb_coin.png";
import Poly from "../../images/polygon_coin.png";
import Xrp from "../../images/xrp_coin.png";

export const WalletList = () => {
  const { Coins } = useContext(UserContext);

  const [etherList, setEtherList] = useState(false);
  const [usdList, setUsdList] = useState(false);
  const [bnbList, setBnbList] = useState(false);
  const [polyList, setPolyList] = useState(false);
  const [xrpList, setXrpList] = useState(false);
  const [dogeList, setDogeList] = useState(false);

  /*-----------------------------------------------------------------*/
  const addToList = () => {
    document.querySelector(".bg-modal").style.display = "flex";
  };

  const close = () => {
    document.querySelector(".bg-modal").style.display = "none";
  };

  const CriarLista = () => {
    const select = document.getElementById("selecionarMoeda");
    const opcaoTexto = select.options[select.selectedIndex].text;

    if (opcaoTexto === "Ethereum") {
      if (etherList === false) {
        var EtherStatus = true;
        setEtherList(
          localStorage.setItem("EtherVerification", JSON.stringify(EtherStatus))
        );

        document.querySelector(".ethereum").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "USD Coin") {
      if (usdList === false) {
        var usdStatus = true;
        setUsdList(
          localStorage.setItem("UsdVerification", JSON.stringify(usdStatus))
        );

        document.querySelector(".usdCoin").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "BNB") {
      if (bnbList === false) {
        var bnbStatus = true;
        setBnbList(
          localStorage.setItem("BnBVerification", JSON.stringify(bnbStatus))
        );

        document.querySelector(".bnb").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "Polygon") {
      if (polyList === false) {
        var polyStatus = true;
        setPolyList(
          localStorage.setItem("PolyVerification", JSON.stringify(polyStatus))
        );

        document.querySelector(".polygon").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "XRP") {
      if (xrpList === false) {
        var xrpStatus = true;
        setXrpList(
          localStorage.setItem("XrpVerification", JSON.stringify(xrpStatus))
        );

        document.querySelector(".xrp").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "Dogecoin") {
      if (dogeList === false) {
        var dogeStatus = true;
        setDogeList(
          localStorage.setItem("DogeVerification", JSON.stringify(dogeStatus))
        );

        document.querySelector(".dogeCoin").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    }
  };

  useEffect(() => {
    const valor1 = JSON.parse(localStorage.getItem("EtherVerification"));
    if (valor1) {
      document.querySelector(".ethereum").style.display = "flex";
    }
    const valor2 = JSON.parse(localStorage.getItem("UsdVerification"));
    if (valor2) {
      document.querySelector(".usdCoin").style.display = "flex";
    }
    const valor3 = JSON.parse(localStorage.getItem("BnBVerification"));
    if (valor3) {
      document.querySelector(".bnb").style.display = "flex";
    }
    const valor4 = JSON.parse(localStorage.getItem("PolyVerification"));
    if (valor4) {
      document.querySelector(".polygon").style.display = "flex";
    }
    const valor5 = JSON.parse(localStorage.getItem("XrpVerification"));
    if (valor5) {
      document.querySelector(".xrp").style.display = "flex";
    }
    const valor6 = JSON.parse(localStorage.getItem("DogeVerification"));
    if (valor6) {
      document.querySelector(".dogeCoin").style.display = "flex";
    }
  }, []);
  return (
    <>
      <div class="walletBorder">
        <div class="listAcima">
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">
              <p>Imagem</p>
            </ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn"><p>Nome</p></ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn"><p>Tokens</p></ul>
          </div>
          <div class="wallet-separadores">
            <ul class="walletColumn"><p>Preco em R$</p></ul>
          </div>
        </div>
        <div class="listaMoedas">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Bit} alt="Bit Coin" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>BitCoin</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[0].preco * Coins[0].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas ethereum ">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Eth} alt="Ethereum" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>Ethereum</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[1].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[1].preco * Coins[1].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas usdCoin">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Usdt} alt="USDTcoin" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>USD Coin</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[2].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[2].preco * Coins[2].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas bnb">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Bnb} alt="BinanceCoin" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>BNB</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[3].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[3].preco * Coins[3].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas polygon">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Poly} alt="polygon" id="polyImg" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>Polygon</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[4].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[4].preco * Coins[4].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas xrp">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Xrp} alt="XrpCoin" id="xrpImg" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>XRP</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[5].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[5].preco * Coins[5].token}</li>
            </ul>
          </div>
        </div>
        <div class="listaMoedas dogeCoin">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <img src={Doge} alt="DogeCoin" />
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li><p>DogeCoin</p></li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[6].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[6].preco * Coins[6].token}</li>
            </ul>
          </div>
        </div>
        <div class="relativeToBtn"></div>
      </div>
      <button id="button-choose" onClick={addToList}>
        Adicionar Moeda
      </button>
      <div class="bg-modal">
        <div class="modal-content">
          <div id="close-btn" onClick={close}>
            +
          </div>
          <div class="modal-selecionar-carteira">
            <p>Escolha uma moeda para</p>
            <p> adicionar na sua carteira</p>
            <select id="selecionarMoeda" name="selecionarMoeda">
              <option value={Coins[1].preco}>{Coins[1].nome}</option>
              <option value={Coins[2].preco}>{Coins[2].nome}</option>
              <option value={Coins[3].preco}>{Coins[3].nome}</option>
              <option value={Coins[4].preco}>{Coins[4].nome}</option>
              <option value={Coins[5].preco}>{Coins[5].nome}</option>
              <option value={Coins[6].preco}>{Coins[6].nome}</option>
            </select>
            <button onClick={CriarLista}>Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletList;
