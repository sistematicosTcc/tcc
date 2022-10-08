import "./walletStyle.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { useState } from "react";
import { useEffect } from "react";

export const WalletList = () => {
  const { Coins } = useContext(UserContext);

  const [etherList, setEtherList] = useState();
  const [usdList, setUsdList] = useState();
  const [bnbList, setBnbList] = useState();
  const [polyList, setPolyList] = useState();
  const [xrpList, setXrpList] = useState();
  const [dogeList, setDogeList] = useState();

  /*-----------------------------------------------------------------*/

  const [etherSet, setEtherSet] = useState();
  const [usdSet, setUsdSet] = useState();
  const [bnbSet, setBnbSet] = useState();
  const [polySet, setPolySet] = useState();
  const [xrpSet, setXrpSet] = useState();
  const [dogeSet, setDogeSet] = useState();

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

    console.log(etherSet);
    const valor1 = JSON.parse(localStorage.getItem("EtherVerification"));
    console.log(valor1);
    setEtherList(valor1);
    const valor2 = JSON.parse(localStorage.getItem("UsdVerification"));
    setUsdList(valor2);
    const valor3 = JSON.parse(localStorage.getItem("BnBVerification"));
    setBnbList(valor3);
    const valor4 = JSON.parse(localStorage.getItem("PolyVerification"));
    setPolyList(valor4);
    const valor5 = JSON.parse(localStorage.getItem("XrpVerification"));
    setXrpList(valor5);
    const valor6 = JSON.parse(localStorage.getItem("DogeVerification"));
    setDogeList(valor6);
    if (opcaoTexto === "Ethereum") {
      if (etherList === false) {
        var EtherStatus = true;
        setEtherList(
          localStorage.setItem("EtherVerification", JSON.stringify(EtherStatus))
        );
        setEtherSet(true);
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "USD Coin") {
      if (usdList === false) {
        var usdStatus = true;
        setUsdList(localStorage.setItem("UsdVerification", usdStatus));

        setUsdSet(true);
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "BNB") {
      if (bnbList === false) {
        var bnbStatus = true;
        setBnbList(localStorage.setItem("BnBVerification", bnbStatus));

        setBnbSet(true);

        document.querySelector(".bnb").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "Polygon") {
      if (polyList === false) {
        var polyStatus = true;
        setPolyList(localStorage.setItem("PolyVerification", polyStatus));

        setPolySet(true);

        document.querySelector(".polygon").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "XRP") {
      if (xrpList === false) {
        var XrpStatus = true;
        setXrpList(localStorage.setItem("XrpVerification", XrpStatus));

        setXrpSet(true);

        document.querySelector(".xrp").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    } else if (opcaoTexto === "Dogecoin") {
      if (dogeList === false) {
        var dogeStatus = true;
        setDogeList(localStorage.setItem("DogeVerification", dogeStatus));

        setDogeSet(true);

        document.querySelector(".dogeCoin").style.display = "flex";
      } else {
        alert("Valor já foi adicionado");
      }
    }
  };

  useEffect(() => {
  }, []);
  return (
    <>
      <div class="walletBorder">
        <div class="listAcima">
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">
              <li>Imagem</li>
            </ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">Nome</ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">Tokens</ul>
          </div>
          <div class="wallet-separadores">
            <ul class="walletColumn">Preco em R$</ul>
          </div>
        </div>
        <div class="listaMoedas">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>Bitcoin</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>Ethereum</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>USD Coin</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>BNB</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>Polygon</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>XRP</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
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
            <ul class="walletColumn"></ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>DogeCoin</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>{Coins[0].token}</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>{Coins[6].preco * Coins[6].token}</li>
            </ul>
          </div>
        </div>
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
            <p>Escolha uma moeda para adicionar no sua carteira</p>
            <select id="selecionarMoeda" name="selecionarMoeda">
              <option value={Coins[1].preco}>{Coins[1].nome}</option>
              <option value={Coins[2].preco}>{Coins[2].nome}</option>
              <option value={Coins[3].preco}>{Coins[3].nome}</option>
              <option value={Coins[4].preco}>{Coins[4].nome}</option>
              <option value={Coins[5].preco}>{Coins[5].nome}</option>
              <option value={Coins[6].preco}>{Coins[6].nome}</option>
            </select>
            <button onClick={CriarLista}>OK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletList;
