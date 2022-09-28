import './style.css'

import React from "react";
import { Link } from 'react-router-dom';

import Helmet from "react-helmet";

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"

import { AdvancedChart } from "react-tradingview-embed";

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
            <Link to="/exchange">
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
            <Link to="/configuracoes">
              <span className="material-icons-sharp">settings</span>
              <h4>Configurações</h4>
            </Link>
          </div>
        </aside>
        <section class="middle">
          <div class="tradingview-widget-container">
            <div id="tradingview_1dbe3"></div>
            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
            <AdvancedChart widgetProps={{
              "symbols": [
                [
                  "BTC",
                  "BINANCE:BTCUSDT|1D"
                ],
                [
                  "ETH",
                  "BINANCE:ETHUSDT|1D"
                ],
                [
                  "BNB",
                  "BINANCE:BNBUSDT|1D"
                ],
                [
                  "SHIB",
                  "BINANCE:SHIBUSDT|1D"
                ],
                [
                  "DOGE",
                  "BINANCE:DOGEUSDT|1D"
                ]
              ],
              "chartOnly": false,
              "width": "100%",
              "height": 500,
              "locale": "br",
              "colorTheme": "light",
              "isTransparent": false,
              "autosize": false,
              "showVolume": false,
              "hideDateRanges": false,
              "scalePosition": "right",
              "scaleMode": "Normal",
              "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
              "noTimeScale": false,
              "valuesTracking": "1",
              "chartType": "line",
              "fontColor": "#787b86",
              "gridLineColor": "rgba(42, 46, 57, 0.06)",
              "container_id": "tradingview_1dbe3",
              "theme": "light" //dark ( padrao )
            }} />
          </div>
          <Helmet>
            <script src="https://cdn.jsdelivr.net/gh/coinponent/coinponent@1.2.6/dist/coinponent.js"></script>
          </Helmet>
          <coin-ponent > </coin-ponent>
        </section>


        <Helmet>
          <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
        </Helmet>
        <div className="livecoinwatch-widget-3" lcw-base="BRL" lcw-d-head="false" lcw-d-name="true" lcw-d-code="true"
          lcw-d-icon="true" lcw-color-tx="#000000" lcw-color-bg="#ffffff" lcw-border-w="0">
        </div>


        <Helmet>
          <script type="text/javascript" src="main.js"></script>
        </Helmet>
      </div>
    </>
  );
}

export default Dashboard;
