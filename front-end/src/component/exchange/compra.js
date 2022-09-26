export const Compra = () => {
  const Coins = [
    {
      id: 0,
      nome: "BitCoin",
      // img:'imagem da moeda',
      preco: 103000,
    },
    {
      id: 1,
      nome: "Ethereum",
      // img:'imagem da moeda',
      preco: 8200,
    },
    {
      id: 2,
      nome: "USD Coin",
      // img:'imagem da moeda',
      preco: 103270,
    },
    {
      id: 3,
      nome: "BNB",
      // img:'imagem da moeda',
      preco: 103270,
    },
    {
      id: 4,
      nome: "Polygon",
      // img:'imagem da moeda',
      preco: 0.24,
    },
    {
      id: 5,
      nome: "XRP",
      // img:'imagem da moeda',
      preco: 1.75,
    },
    {
      id: 6,
      nome: "Dogecoin",
      // img:'imagem da moeda',
      preco: 0.32,
    },
  ];

  var selecionar = document.getElementById("selecionaMoedas");
  // var opcaoTexto = select.options[select.selectedIndex].text;

  // function valorCompra() {
    //variaveis com os inputs
    const inputReal = document.querySelector('#real');
    const inputCoin = document.querySelector('#coin');

    //variaveis realizando calculo de real para cripto
    var moeda = document.querySelector('#selecionaMoedas');
    var valorReal = inputReal / moeda;

    inputReal.addEventListener('input', () => {
      if(!inputReal.value) {
        inputCoin.value = '';
        return;
      };
      var convertedValue = inputReal.value * valorReal;
      inputCoin.value = (convertedValue).toFixed(6);
    })

    inputCoin.addEventListener('input', () => {
      if(!inputCoin.value) {
        inputReal.value = '';
        return;
      };
      const convertedValue = inputCoin.value * moeda;
      inputReal.value = (convertedValue).toFixed(6);
    })
  // }

  return (
    <>
      <div class="background">
        <div>
          <button class="button-selection">Comprar</button>
        </div>
        <h3>Eu quero pagar</h3>
        <div>
          <input
            type="number" placeholder="Coloque um valor" id="real" 

          />

          {/* <button class="button-coin" onClick={valorCompra}>TESTE</button> */}
        </div>
        <h3>Vou receber=</h3>
        <div>
          <input type="number" id="coin" ></input>
          <select id="selecionaMoedas" name="selecionarMoedas">
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
          <button>Compre com Taxa 0</button>
        </div>

      </div>

    </>
  )

}