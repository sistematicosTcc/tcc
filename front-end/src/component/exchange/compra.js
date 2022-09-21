import HeaderDashboard from "../headerDashboard/headBoard"

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

  function valorCompra() {
    var val = document.querySelector('#pagar').value;
    var valorMoeda = Coins[0].preco;

    if (valorMoeda === 103000) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 8200) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 103270) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 103270) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 0.24) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 1.75) {
      var valorTotal = val / valorMoeda;
    }

    if (valorMoeda === 0.32) {
      var valorTotal = val / valorMoeda;
    }
    console.log(valorTotal);
  }

  return (
    <>
      <div class="background">
        <div>
          <button class="button-selection">Comprar</button>
        </div>
        <h3>Eu quero pagar</h3>
        <div>
          <input
            type="number" placeholder="Coloque um valor" id="pagar"

          />
          <select id="selecionaMoedas" name="selecionarMoedas">
            <option value="Moeda1">{Coins[0].nome}</option>
            <option value="Moeda2">{Coins[1].nome}</option>
            <option value="Moeda3">{Coins[2].nome}</option>
            <option value="Moeda4">{Coins[3].nome}</option>
            <option value="Moeda5">{Coins[4].nome}</option>
            <option value="Moeda6">{Coins[5].nome}</option>
            <option value="Moeda7">{Coins[6].nome}</option>
          </select>
          <button class="button-coin" onClick={valorCompra}>TESTE</button>
        </div>
        <h3>Vou receber=</h3>
        <div>
          <input type="number" id="receber"></input>
        </div>

        <h3>Preço da referência</h3>
        <div class="button-concluded">
          <button>Compre com Taxa 0</button>
        </div>

      </div>

    </>
  )

}