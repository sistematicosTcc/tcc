import './style.css'

import React, {useState} from "react";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"

import { Compra } from '../../component/exchange/compra';
import { Venda } from '../../component/exchange/venda';


export const Exchange = () => {

  const [compraSetting, setcompraSetting] = useState(true);
  const [vendaSetting, setvendaSetting] = useState(false);


  const mostrarVenda = () => {

    document.querySelector(".venda").style.backgroundColor = "#56555e"
    document.querySelector(".compra").style.backgroundColor = "#86846c"

    setvendaSetting(current => !current);
    setcompraSetting(false)

  };
  const mostrarCompra = () => {

    document.querySelector(".venda").style.backgroundColor = "#86846c"
    document.querySelector(".compra").style.backgroundColor = "#56555e"
    setcompraSetting(current => !current);
    setvendaSetting(false)

  };
  

  return (
  <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
    <HeaderDashboard />
    <div className="mainContent">
      <aside>
        <button id="close-btn">
            <span className="material-icons-sharp">close</span>
        </button>
        <div className="sidebar">
          <Link to="/dashboard">
            <span className="material-icons-sharp">dashboard</span>
            <h4>Dashboard</h4>
          </Link>
          <Link to="/exchange" className='active'>
            <span className="material-icons-sharp">currency_exchange</span>
            <h4>Exchange</h4>
          </Link>
          <Link to="/wallet">
            <span className="material-icons-sharp">account_balance_wallet</span>
            <h4>Wallet</h4>
          </Link>
          <Link to="/transacoes" >
            <span className="material-icons-sharp">credit_card</span>
            <h4>Transações</h4>
          </Link>
          <Link to="/ajuda" >
            <span className="material-icons-sharp">help_center</span>
            <h4>Ajuda</h4>
          </Link>
        </div>
      </aside>
      <div className='center-page'>
        <div className='division-buttons'>
          <div>
            <button class="button-selection compra" onClick={mostrarCompra}>Comprar</button>
          </div>
          <div>
            <button class="button-selection venda" onClick={mostrarVenda}>Vender</button>
          </div>
        </div>
        <div>
          {compraSetting && <Compra />}
        </div>
        <div>
          {vendaSetting && <Venda />}
        </div>
      </div>
    </div>
  </>
  );
}

export default Exchange;