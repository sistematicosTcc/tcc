import React from "react";
import './historico.css'

export const GridItem = ({ item,onDelete }) =>{

  return(
    <>
      <div className="tr">
        <div className="td">
          {item.desc}
        </div>
        <div className="td">
          {item.amount}
        </div>
        <div className="td">
          {item.expense ? (
          <p>PERDA</p>
          ) : (
          <p>LUCRO</p>
          )}
        </div>
        <div className="td-delete">
            <div onClick={() => onDelete(item.id)}> Deletar </div>
        </div>
      </div>
    </>
  )
}