import { useContext} from 'react';
import { UserContext } from '../../contexts/UserContexts';
import './exchange.css'

export const Compra = () => {
  
  const {comprarTaxaZero,Coins} = useContext(UserContext)

  function valorCompra() {

    //variaveis com os inputs
    const inputReal = document.querySelector('#real');
    const inputCoin = document.querySelector('#coin');

    const valorReal = document.querySelector('#real').value;
    const valorToken = document.querySelector('#coin').value;

    
    //variaveis realizando calculo de real para cripto
    const select = document.getElementById("selecionarMoedas");
    const moeda = select.options[select.selectedIndex].value;

    console.log(select)

    console.log("moeda = "+moeda)

    console.log("inputCoin = "+inputCoin)
    console.log("inputCoinValor (TOKEN) = "+valorToken)
    console.log("inputReal = "+inputReal)
    console.log("inputRealValor (BRL) = "+valorReal)

    var valueReal = inputReal.value / moeda;

    console.log("valueReal = "+valueReal)

    var novaCarteira = {valorToken,valorReal}
    
    localStorage.setItem("Carteiras", JSON.stringify(novaCarteira));

    console.log(novaCarteira)

    inputReal.addEventListener('input', () => {
      
      if(!inputReal.value) {
        console.log(inputCoin.value)
        inputCoin.value = '';
      };
      var convertedValue = inputReal.value * valueReal;
      inputCoin.value = (convertedValue).toFixed(6);
    });

    inputCoin.addEventListener('input', () => {
      if(!inputCoin.value) {
        inputReal.value = '';
      };
      const convertedValue = inputCoin.value * moeda;
      inputReal.value = (convertedValue).toFixed(6);
    })
  }

  return (
    <>
      <div class="background">
        <h3>Comprar Criptomoedas</h3><br/>
        <h3>Eu quero pagar</h3>
        <div>
        <span>R$ </span>
          <input
            type="number" placeholder="Coloque um valor" id="real" 

          />

        </div>
          <button class="button-coin" onClick={valorCompra}> Selecionar Moeda </button>
        <h3>Vou receber=</h3>
        <div>
          <span>Token </span>
          <input type="number" id="coin" ></input>
          <select id="selecionarMoedas" name="selecionarMoedas">
            <option value={Coins[0].preco}>{Coins[0].nome}</option>
            <option value={Coins[1].preco}>{Coins[1].nome}</option>
            <option value={Coins[2].preco}>{Coins[2].nome}</option>
            <option value={Coins[3].preco}>{Coins[3].nome}</option>
            <option value={Coins[4].preco}>{Coins[4].nome}</option>
            <option value={Coins[5].preco}>{Coins[5].nome}</option>
            <option value={Coins[6].preco}>{Coins[6].nome}</option>
          </select>
        </div>
        <div class="button-concluded">
          <button onClick={comprarTaxaZero} id="addFundos">Compre com Taxa 0</button>
        </div>

      </div>

    </>
  )

}