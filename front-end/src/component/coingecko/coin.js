import React from 'react'

const coin = ({ name , image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div class="coin-cointainer">
      <div class="coin-row">
        <div class="coin">
          <img src={image} alt="crypto"/>
          <h1>{name}</h1>
          <p class="coin-symbol">{symbol}</p>
          <div class="coin-data">
            <p class="coin-price">${price}</p>
            <p class="coin-volume">${volume.toLocaleString()}
            </p>
            {priceChange < 0 ?(
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : ( 
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
          }

          <p className="coin-marketcap">
            Mkt cap: ${marketcap.toLocaleString()}
          </p>
          </div>
        </div>    
      </div>  
    </div>
  )
}

export default coin