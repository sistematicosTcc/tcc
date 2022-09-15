import './walletStyle.css'

export const WalletList = () => {
  const Coins = [
    {
      id: 0,
      nome: "BitCoin",
      // img:'imagem da moeda',
      value: "103000",
    },
    {
      id: 1,
      nome: "Ethereum",
      // img:'imagem da moeda',
      value: "8200",
    },
    {
      id: 2,
      nome: "USD Coin",
      // img:'imagem da moeda',
      value: "103270",
    },
    {
      id: 3,
      nome: "BNB",
      // img:'imagem da moeda',
      value: "103270",
    },
    {
      id: 4,
      nome: "Polygon",
      // img:'imagem da moeda',
      value: "0,24",
    },
    {
      id: 5,
      nome: "XRP",
      // img:'imagem da moeda',
      value: "	1.75",
    },
    {
      id: 6,
      nome: "Dogecoin",
      // img:'imagem da moeda',
      value: "0.32",
    },
  ];

  const addToList = () => {
        document.querySelector(".bg-modal").style.display = "flex";
  };

  const close = () => {
      document.querySelector(".bg-modal").style.display = "none";
  };

  const okay = () =>{
    var select = document.getElementById("selecionarMoeda");
    var opcaoTexto = select.options[select.selectedIndex].text;
    console.log(opcaoTexto); // Ferrari
  }

  return (
    <>
      <div class="walletBorder">
        <div class="listAcima">
          <div class="wallet-separadores">
            <ul class="walletColumn">Moeda</ul>
          </div>
          <div class="wallet-separadores">
          <ul class="walletColumn">Quantidade</ul>
          </div>
          <div class="wallet-separadores">
            <ul class="walletColumn">Data</ul>
          </div>
          <div class="wallet-separadores">
            <ul class="walletColumn">Status</ul>
        </div>
        </div>
          <div class="listaMoedas">
            <p>caquita</p>
          </div>
        </div>
        <button id="button-choose" onClick={addToList}>
          Adicionar Moeda
        </button>
      <div class="bg-modal">
        <div class="modal-content">
          <div id="close-btn" onClick={close}>+</div>
          <div class="modal-selecionar-carteira">
          <p>Escolha uma moeda para adicionar no sua carteira</p>
          <select id="selecionarMoeda" name="selecionarMoeda">
            <option value="Moeda1">{Coins[0].nome}</option>
            <option value="Moeda2">{Coins[1].nome}</option>
            <option value="Moeda3">{Coins[2].nome}</option>
            <option value="Moeda3">{Coins[3].nome}</option>
            <option value="Moeda3">{Coins[4].nome}</option>
            <option value="Moeda3">{Coins[5].nome}</option>
            <option value="Moeda3">{Coins[6].nome}</option>
          </select>
          <button onClick={close}>OK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletList;
