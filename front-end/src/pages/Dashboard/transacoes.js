import "./style.css";

import React from "react";
import { Link } from "react-router-dom";

import HeaderDashboard from "../../component/headerDashboard/headBoard.js";
import { useEffect } from "react";
import { useState } from "react";

export const Transacoes = () => {
  const [arrayHistorico, setArrayHistorico] = useState([]);

  useEffect(() => {
    const historicoIten =
      JSON.parse(window.localStorage.getItem("Historico")) || [];
    setArrayHistorico(historicoIten);
  }, []);

  return (
    <>
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
            <Link to="/exchange">
              <span className="material-icons-sharp">currency_exchange</span>
              <h4>Exchange</h4>
            </Link>
            <Link to="/wallet">
              <span className="material-icons-sharp">
                account_balance_wallet
              </span>
              <h4>Wallet</h4>
            </Link>
            <Link to="/transacoes" className="active">
              <span className="material-icons-sharp">credit_card</span>
              <h4>Transações</h4>
            </Link>
            <Link to="/ajuda">
              <span className="material-icons-sharp">help_center</span>
              <h4>Ajuda</h4>
            </Link>
          </div>
        </aside>
        <table>
          <thead>
            <tr>
              <th>Moeda</th>
              <th>Preco</th>
              <th>Quantidade</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {arrayHistorico.map((transacao) => {
              return (
                <tr>
                  <td>{transacao.nome}</td>
                  <td>{transacao.preco}</td>
                  <td>{transacao.quantidade}</td>
                  <td>{transacao.data}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transacoes;
