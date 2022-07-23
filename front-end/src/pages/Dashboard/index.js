import './style.css'

import React from "react";
import { Link } from 'react-router-dom';

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"

export const Dashboard = () => {
  return (
  <>
      <HeaderDashboard />
      <div className="mainContent">
        <aside>
          <button id="close-btn">
              <span className="material-icons-sharp">close</span>
          </button>
          <div className="sidebar">
            <Link to="/dashboard" className='active'>
              <span className="material-icons-sharp">dashboard</span>
              <h4>Dashboard</h4>
            </Link>
            <Link to="/teste">
              <span className="material-icons-sharp">currency_exchange</span>
              <h4>Exchange</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">account_balance_wallet</span>
              <h4>Wallet</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">credit_card</span>
              <h4>Transações</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">insights</span>
              <h4>Análises</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">message</span>
              <h4>Mensagens</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">help_center</span>
              <h4>Ajuda</h4>
            </Link>
            <Link to="#">
              <span className="material-icons-sharp">settings</span>
              <h4>Configurações</h4>
            </Link>
          </div>
        </aside>
        <section className="middle">
          <div className="tradingview-widget-container">
            <div id="tradingview_1dbe3"></div>
              <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
              <script type="text/javascript" src="/indexAuxiliar.js" />
          </div>
          <script src="https://cdn.jsdelivr.net/gh/coinponent/coinponent@1.2.6/dist/coinponent.js"></script>
          <coin-ponent > </coin-ponent>
        </section>
        <section className="right ">
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
            <div className="livecoinwatch-widget-3" lcw-base="BRL" lcw-d-head="false" lcw-d-name="true" lcw-d-code="true"
                lcw-d-icon="true" lcw-color-tx="#000000" lcw-color-bg="#ffffff" lcw-border-w="0">
            </div>
        </section>
      </div>
    <script type="text/javascript" src="main.js"></script>
</>
  );
}

export default Dashboard;
