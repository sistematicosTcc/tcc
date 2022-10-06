import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContexts';
import './exchange.css'

export const Venda = () => {
  
  const {VenderTaxaZero,Coins} = useContext(UserContext)
  const [inputs, setInputs] = useState({
    real: "",
    coin: "",
    selecionarMoedas: 0,
  })
  const onChangeReal = (event) => {
    const valorReal = event.target.value;
    setInputs({
      ...inputs,
      real: valorReal,
      coin: valorReal / Coins[inputs.selecionarMoedas].preco,
    })
  }
  const onChangeCoin = (event) => {
    const valorCoin = event.target.value;
    setInputs({
      ...inputs,
      real: valorCoin * Coins[inputs.selecionarMoedas].preco,
      coin: valorCoin,
    })
  }
  const onChangeSelect = (event) => {
    const tokenSelecionada = event.target.value;
    setInputs({
      ...inputs,
      selecionarMoedas: tokenSelecionada,
      coin: inputs.real / Coins[tokenSelecionada].preco,
    })
  }



  return (
    <>
      <div class="background">
        <h3>Vender Criptomoedas</h3><br/>
        <h3>Vou Vender = </h3> <br/>
        <div>
          <span>Token </span>
          <input
            type="number"
            name="coin"
            value={inputs.coin}
            onChange={onChangeCoin}
          />
          <select
            id="selecionarMoedas"
            name="selecionarMoedas"
            value={inputs.selecionarMoedas}
            onChange={onChangeSelect}
          >
            <option value={0}>{Coins[0].nome}</option>
            <option value={1}>{Coins[1].nome}</option>
            <option value={2}>{Coins[2].nome}</option>
            <option value={3}>{Coins[3].nome}</option>
            <option value={4}>{Coins[4].nome}</option>
            <option value={5}>{Coins[5].nome}</option>
            <option value={6}>{Coins[6].nome}</option>
          </select>
        </div>
        <h3>Vou Receber = </h3>
        <div>
        <span>R$ </span>
        <input
            type="number"
            placeholder="Coloque um valor"
            name="real"
            value={inputs.real}
            onChange={onChangeReal}
          />
        </div>
          
        
        <div class="button-concluded">
          <button
            onClick={() => VenderTaxaZero(Number(inputs.coin), inputs.real, Coins[inputs.selecionarMoedas].nome)}
            id="addFundos"
            // disabled={inputs.real <= 0}
          >
            Venda com Taxa 0
          </button>
        </div>

      </div>

    </>
  )

}