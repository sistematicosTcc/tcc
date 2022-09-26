import "./walletStyle.css";

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

  const CriarLista = () => {

    const select = document.getElementById("selecionarMoeda");
    const opcaoTexto = select.options[select.selectedIndex].text;

    if(opcaoTexto === 'BitCoin'){
      const divMoedas = document.querySelector(".walletBorder");
      const divList = document.createElement("div");

      const divSeparadores = document.createElement("div");

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      const li2 = document.createElement("li");
      const divSeparadores2 = document.createElement("div");
      const ul2 = document.createElement("ul");

      const li3 = document.createElement("li");
      const divSeparadores3 = document.createElement("div");
      const ul3 = document.createElement("ul");

      const li4 = document.createElement("li");
      const divSeparadores4 = document.createElement("div");
      const ul4 = document.createElement("ul");


      divMoedas.appendChild(divList);

      divList.className = 'listaMoedas'
      divList.appendChild(divSeparadores);
      divList.appendChild(divSeparadores2);
      divList.appendChild(divSeparadores3);
      divList.appendChild(divSeparadores4);

      divSeparadores.classList = 'walletMoedas-separadores borderRight'
      divSeparadores2.classList = 'walletMoedas-separadores borderRight'
      divSeparadores3.classList = 'walletMoedas-separadores borderRight'
      divSeparadores4.classList = 'walletMoedas-separadores borderRight'

      divSeparadores.appendChild(ul);
      divSeparadores2.appendChild(ul2);
      divSeparadores3.appendChild(ul3);
      divSeparadores4.appendChild(ul4);

      ul.className = 'walletColumn'
      
      ul.appendChild(li);
      ul2.appendChild(li2);
      ul3.appendChild(li3);
      ul4.appendChild(li4);

      li.innerHTML = 'bitcoin'
      li2.innerHTML = '0'
      li3.innerHTML = 'Hoje'
      li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'Ethereum'){
        const divMoedas = document.querySelector(".walletBorder");
        const divList = document.createElement("div");
  
        const divSeparadores = document.createElement("div");
  
        const ul = document.createElement("ul");
        const li = document.createElement("li");
  
        const li2 = document.createElement("li");
        const divSeparadores2 = document.createElement("div");
        const ul2 = document.createElement("ul");
  
        const li3 = document.createElement("li");
        const divSeparadores3 = document.createElement("div");
        const ul3 = document.createElement("ul");
  
        const li4 = document.createElement("li");
        const divSeparadores4 = document.createElement("div");
        const ul4 = document.createElement("ul");
  
  
        divMoedas.appendChild(divList);
  
        divList.className = 'listaMoedas'
        divList.appendChild(divSeparadores);
        divList.appendChild(divSeparadores2);
        divList.appendChild(divSeparadores3);
        divList.appendChild(divSeparadores4);
  
        divSeparadores.classList = 'walletMoedas-separadores borderRight'
        divSeparadores2.classList = 'walletMoedas-separadores borderRight'
        divSeparadores3.classList = 'walletMoedas-separadores borderRight'
        divSeparadores4.classList = 'walletMoedas-separadores borderRight'
  
        divSeparadores.appendChild(ul);
        divSeparadores2.appendChild(ul2);
        divSeparadores3.appendChild(ul3);
        divSeparadores4.appendChild(ul4);
  
        ul.className = 'walletColumn'
        
        ul.appendChild(li);
        ul2.appendChild(li2);
        ul3.appendChild(li3);
        ul4.appendChild(li4);
  
        li.innerHTML = 'Ethereum'
        li2.innerHTML = '0'
        li3.innerHTML = 'Hoje'
        li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'USD Coin'){
      const divMoedas = document.querySelector(".walletBorder");
      const divList = document.createElement("div");

      const divSeparadores = document.createElement("div");

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      const li2 = document.createElement("li");
      const divSeparadores2 = document.createElement("div");
      const ul2 = document.createElement("ul");

      const li3 = document.createElement("li");
      const divSeparadores3 = document.createElement("div");
      const ul3 = document.createElement("ul");

      const li4 = document.createElement("li");
      const divSeparadores4 = document.createElement("div");
      const ul4 = document.createElement("ul");


      divMoedas.appendChild(divList);

      divList.className = 'listaMoedas'
      divList.appendChild(divSeparadores);
      divList.appendChild(divSeparadores2);
      divList.appendChild(divSeparadores3);
      divList.appendChild(divSeparadores4);

      divSeparadores.classList = 'walletMoedas-separadores borderRight'
      divSeparadores2.classList = 'walletMoedas-separadores borderRight'
      divSeparadores3.classList = 'walletMoedas-separadores borderRight'
      divSeparadores4.classList = 'walletMoedas-separadores borderRight'

      divSeparadores.appendChild(ul);
      divSeparadores2.appendChild(ul2);
      divSeparadores3.appendChild(ul3);
      divSeparadores4.appendChild(ul4);

      ul.className = 'walletColumn'
      
      ul.appendChild(li);
      ul2.appendChild(li2);
      ul3.appendChild(li3);
      ul4.appendChild(li4);

      li.innerHTML = 'USD Coin'
      li2.innerHTML = '0'
      li3.innerHTML = 'Hoje'
      li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'BNB'){
      const divMoedas = document.querySelector(".walletBorder");
      const divList = document.createElement("div");

      const divSeparadores = document.createElement("div");

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      const li2 = document.createElement("li");
      const divSeparadores2 = document.createElement("div");
      const ul2 = document.createElement("ul");

      const li3 = document.createElement("li");
      const divSeparadores3 = document.createElement("div");
      const ul3 = document.createElement("ul");

      const li4 = document.createElement("li");
      const divSeparadores4 = document.createElement("div");
      const ul4 = document.createElement("ul");


      divMoedas.appendChild(divList);

      divList.className = 'listaMoedas'
      divList.appendChild(divSeparadores);
      divList.appendChild(divSeparadores2);
      divList.appendChild(divSeparadores3);
      divList.appendChild(divSeparadores4);

      divSeparadores.classList = 'walletMoedas-separadores borderRight'
      divSeparadores2.classList = 'walletMoedas-separadores borderRight'
      divSeparadores3.classList = 'walletMoedas-separadores borderRight'
      divSeparadores4.classList = 'walletMoedas-separadores borderRight'

      divSeparadores.appendChild(ul);
      divSeparadores2.appendChild(ul2);
      divSeparadores3.appendChild(ul3);
      divSeparadores4.appendChild(ul4);

      ul.className = 'walletColumn'
      
      ul.appendChild(li);
      ul2.appendChild(li2);
      ul3.appendChild(li3);
      ul4.appendChild(li4);

      li.innerHTML = 'BNB'
      li2.innerHTML = '0'
      li3.innerHTML = 'Hoje'
      li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'Polygon'){
        const divMoedas = document.querySelector(".walletBorder");
        const divList = document.createElement("div");
  
        const divSeparadores = document.createElement("div");
  
        const ul = document.createElement("ul");
        const li = document.createElement("li");
  
        const li2 = document.createElement("li");
        const divSeparadores2 = document.createElement("div");
        const ul2 = document.createElement("ul");
  
        const li3 = document.createElement("li");
        const divSeparadores3 = document.createElement("div");
        const ul3 = document.createElement("ul");
  
        const li4 = document.createElement("li");
        const divSeparadores4 = document.createElement("div");
        const ul4 = document.createElement("ul");
  
  
        divMoedas.appendChild(divList);
  
        divList.className = 'listaMoedas'
        divList.appendChild(divSeparadores);
        divList.appendChild(divSeparadores2);
        divList.appendChild(divSeparadores3);
        divList.appendChild(divSeparadores4);
  
        divSeparadores.classList = 'walletMoedas-separadores borderRight'
        divSeparadores2.classList = 'walletMoedas-separadores borderRight'
        divSeparadores3.classList = 'walletMoedas-separadores borderRight'
        divSeparadores4.classList = 'walletMoedas-separadores borderRight'
  
        divSeparadores.appendChild(ul);
        divSeparadores2.appendChild(ul2);
        divSeparadores3.appendChild(ul3);
        divSeparadores4.appendChild(ul4);
  
        ul.className = 'walletColumn'
        
        ul.appendChild(li);
        ul2.appendChild(li2);
        ul3.appendChild(li3);
        ul4.appendChild(li4);
  
        li.innerHTML = 'Polygon'
        li2.innerHTML = '0'
        li3.innerHTML = 'Hoje'
        li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'XRP'){
      const divMoedas = document.querySelector(".walletBorder");
      const divList = document.createElement("div");

      const divSeparadores = document.createElement("div");

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      const li2 = document.createElement("li");
      const divSeparadores2 = document.createElement("div");
      const ul2 = document.createElement("ul");

      const li3 = document.createElement("li");
      const divSeparadores3 = document.createElement("div");
      const ul3 = document.createElement("ul");

      const li4 = document.createElement("li");
      const divSeparadores4 = document.createElement("div");
      const ul4 = document.createElement("ul");


      divMoedas.appendChild(divList);

      divList.className = 'listaMoedas'
      divList.appendChild(divSeparadores);
      divList.appendChild(divSeparadores2);
      divList.appendChild(divSeparadores3);
      divList.appendChild(divSeparadores4);

      divSeparadores.classList = 'walletMoedas-separadores borderRight'
      divSeparadores2.classList = 'walletMoedas-separadores borderRight'
      divSeparadores3.classList = 'walletMoedas-separadores borderRight'
      divSeparadores4.classList = 'walletMoedas-separadores borderRight'

      divSeparadores.appendChild(ul);
      divSeparadores2.appendChild(ul2);
      divSeparadores3.appendChild(ul3);
      divSeparadores4.appendChild(ul4);

      ul.className = 'walletColumn'
      
      ul.appendChild(li);
      ul2.appendChild(li2);
      ul3.appendChild(li3);
      ul4.appendChild(li4);

      li.innerHTML = 'XRP'
      li2.innerHTML = '0'
      li3.innerHTML = 'Hoje'
      li4.innerHTML = 'Ativado'
      }else
    if(opcaoTexto === 'Dogecoin'){
      const divMoedas = document.querySelector(".walletBorder");
      const divList = document.createElement("div");

      const divSeparadores = document.createElement("div");

      const ul = document.createElement("ul");
      const li = document.createElement("li");

      const li2 = document.createElement("li");
      const divSeparadores2 = document.createElement("div");
      const ul2 = document.createElement("ul");

      const li3 = document.createElement("li");
      const divSeparadores3 = document.createElement("div");
      const ul3 = document.createElement("ul");

      const li4 = document.createElement("li");
      const divSeparadores4 = document.createElement("div");
      const ul4 = document.createElement("ul");


      divMoedas.appendChild(divList);

      divList.className = 'listaMoedas'
      divList.appendChild(divSeparadores);
      divList.appendChild(divSeparadores2);
      divList.appendChild(divSeparadores3);
      divList.appendChild(divSeparadores4);

      divSeparadores.classList = 'walletMoedas-separadores borderRight'
      divSeparadores2.classList = 'walletMoedas-separadores borderRight'
      divSeparadores3.classList = 'walletMoedas-separadores borderRight'
      divSeparadores4.classList = 'walletMoedas-separadores borderRight'

      divSeparadores.appendChild(ul);
      divSeparadores2.appendChild(ul2);
      divSeparadores3.appendChild(ul3);
      divSeparadores4.appendChild(ul4);

      ul.className = 'walletColumn'
      
      ul.appendChild(li);
      ul2.appendChild(li2);
      ul3.appendChild(li3);
      ul4.appendChild(li4);

      li.innerHTML = 'Dogecoin'
      li2.innerHTML = '0'
      li3.innerHTML = 'Hoje'
      li4.innerHTML = 'Ativado'
    }
}

  return (
    <>
      <div class="walletBorder">
        <div class="listAcima">
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">
              <li>Moeda</li>
            </ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">Quantidade</ul>
          </div>
          <div class="wallet-separadores borderRight">
            <ul class="walletColumn">Data</ul>
          </div>
          <div class="wallet-separadores">
            <ul class="walletColumn">Status</ul>
          </div>
        </div>
        <div class="listaMoedas">
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>BitCoin</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>0</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores borderRight">
            <ul class="walletColumn">
              <li>Hoje</li>
            </ul>
          </div>
          <div class="walletMoedas-separadores">
            <ul class="walletColumn">
              <li>ativo</li>
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
            <option value={Coins[0].preco}>{Coins[0].nome}</option>
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
