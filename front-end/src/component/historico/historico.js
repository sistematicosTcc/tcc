import "./historico.css";
import React, { useState } from "react";

function Historico({
  handleAdd,
  itens
}) {
  const [amount, setAmount] = useState("");


  const handleSave = () => {
    const transaction = {
      amount: amount,
    };
    handleAdd(transaction);
  };

  return (
    <div class="testando">
      <div class="testando11">
        <input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
        <button onClick={handleSave}> ADD </button>
        <div className="Tbody-Grid">
          {itens?.map((item) => (
            <div className="tr">
              <div className="td">
                {item.desc}
              </div>
              <div className="td">
                {item.amount}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Historico;
