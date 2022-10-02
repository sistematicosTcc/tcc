import "./historico.css";
import React, { useState } from "react";
import { Grid } from "./histGrid";

function Historico({
  income,
  expense,
  total,
  handleAdd,
  transactionsList,
  setTransactionsList,
}) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const GenerateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("informe a desc e o valor!");
      return;
    } else if (amount < 1) {
      alert("o valor precisa ser positivo");
      return;
    }

    const transaction = {
      id: GenerateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <div class="testando">
      <div class="testando11">
        <p>ENTRADA = {income}</p> <br />
        <p>SAIDA = {expense} </p> <br />
        <p>TOTAL = {total} </p> <br />
        <p>Descricao</p>
        <br />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div class="testando11">
        <p>Amount</p>
        <br />
        <input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <p>Checker</p>
      <br />
      <div class="testando11">
        <input
          type="radio"
          defaultChecked
          id="income"
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <label htmlFor="income">entrada</label>
        <br />
        <input
          type="radio"
          id="expenses"
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <label htmlFor="expenses">saida</label>
        <br />
        <button onClick={handleSave}> ADD </button>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </div>
  );
}

export default Historico;
