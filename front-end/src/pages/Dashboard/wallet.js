import './style.css'

import React from "react";
import { Link } from 'react-router-dom';
import { WalletList } from '../../component/wallet/walletList'

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"

export const Wallet = () => {
  return (
  <>
    <HeaderDashboard />
    <div className="mainContent">
      <aside>
        <button id="close-btn">
            <span className="material-icons-sharp">close</span>
        </button>
        <div className="sidebar">
          <Link to="/dashboard" >
            <span className="material-icons-sharp">dashboard</span>
            <h4>Dashboard</h4>
          </Link>
          <Link to="/exchange">
            <span className="material-icons-sharp">currency_exchange</span>
            <h4>Exchange</h4>
          </Link>
          <Link to="/wallet" className='active'>
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
      <WalletList />
    </div>
  </>
  );
}

export default Wallet;