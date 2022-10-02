import React from "react";
import { GridItem } from "./histGriditem";
import './historico.css'

export const Grid = ({ itens, setItens }) => {
  
  const onDelete =(ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <>
      <div className="table-Grid">
        <div className="thead-Grid">
          <div className="tr">
              <p>Descrição</p>
          </div>
          <div className="tr">
            <p>Valor</p>
          </div>
          <div className="tr">
          <p>Tipo</p>
            <br />
          </div>
        </div>
        <div className="Tbody-Grid">
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </>
  );
};
