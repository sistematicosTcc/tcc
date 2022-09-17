import './style.css'

import React from "react";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"
import { Helmet } from 'react-helmet';

import Iframe from "react-iframe"
import { Compra } from '../../component/exchange/compra';
import { Venda } from '../../component/exchange/venda';


export const Exchange = () => {
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
          <Link to="/teste" className='active'>
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
          <Link to="/analise">
            <span className="material-icons-sharp">insights</span>
            <h4>Análises</h4>
          </Link>
          <Link to="/ajuda" >
            <span className="material-icons-sharp">help_center</span>
            <h4>Ajuda</h4>
          </Link>
          <Link to="/configuracoes">
            <span className="material-icons-sharp">settings</span>
            <h4>Configurações</h4>
          </Link>
        </div>
      </aside>
      <div>
      <Compra />
      <Venda />
      </div>
      </div>
  </>
  );
}

export default Exchange;