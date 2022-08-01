import './style.css'

import React from "react";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"
import { Helmet } from 'react-helmet';

export const Teste = () => {
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
    </div>
         <section className="middle">
    <Helmet>
            <iframe id='iframe-widget' src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=f279f037e83259&locales=true&logo=false&primaryColor=000E56&to=eth&toFiat=eth&toTheMoon=true' style="height: 356px; width: 100%; border: none" />
    </Helmet>
    <Helmet>
            <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
    </Helmet>
        </section> 
        <section className="right ">
        </section>
        <Helmet>
          <script type="text/javascript" src="main.js"></script>
        </Helmet>
  </>
  );
}

export default Teste;