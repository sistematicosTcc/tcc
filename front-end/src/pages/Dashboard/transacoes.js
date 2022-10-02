import './style.css'

import React from "react";
import { Link } from 'react-router-dom';

import HeaderDashboard from "../../component/headerDashboard/headBoard.js"
import Historico from '../../component/historico/historico';
import { useState } from 'react';
import { useEffect } from 'react';

export const Transacoes = () => {

  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(data? JSON.parse(data):[])

  const [income, setIncome] = useState(0)
  const [expense, setexpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    const amountExpense = transactionsList
    .filter((item) =>item.expense)
    .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
    .filter((item) => !item.expense)
    .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc,cur)=> acc + cur, 0).toFixed(4);
    const income = amountIncome.reduce((acc,cur)=> acc + cur, 0).toFixed(4);

    const total = Math.abs(income - expense).toFixed(4);

    setIncome(`R$ ${income}`)
    setexpense(`R$ ${expense}`)

    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

  },[transactionsList])

  const handleAdd = (transaction) =>{
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions))

  }

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
            <span className="material-icons-sharp">account_balance_wallet</span>
            <h4>Wallet</h4>
          </Link>
          <Link to="/transacoes" className='active'>
            <span className="material-icons-sharp">credit_card</span>
            <h4>Transações</h4>
          </Link>
          <Link to="/ajuda">
            <span className="material-icons-sharp">help_center</span>
            <h4>Ajuda</h4>
          </Link>
        </div>
      </aside>
      <Historico income={income} expense={expense} total={total} handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
      <div class="transacoesBorder">
        <div class="transacoesColumn borderRight">Moeda</div>
        <div class="transacoesColumn borderRight">Quantidade</div>
        <div class="transacoesColumn borderRight">Data</div>
        <div class="transacoesColumn">Status</div>
      </div>
    </div>
  </>
  );
}

export default Transacoes;