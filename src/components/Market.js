import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import '../styles/Market.css'

const Market = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / 10);
    const indexOfLastItem = currentPage * 10;
    const indexOfFirstItem = indexOfLastItem - 10;
    const currentDataSet = data.slice(indexOfFirstItem, indexOfLastItem);

    const changePage = (page) => {
      setCurrentPage(page);
    }

    function formatNumber(number) {
      // Abbreviate large numbers
      if (number >= 1000000000000) {
        return (number / 1000000000000).toFixed(1) + 'T';
      }
      else if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + 'B';
      }
      else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
      } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
      }
      
      // Round large numbers
      return Math.round(number).toString();
    }
    
    

  return (
    <div className="container w-75 mt-4 justify-content-center" id="market">
      <div className="header">
        <h1>Cryptocurrency Market</h1>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th className="text-center"scope="col">#</th>
            <th className="text-center"scope="col">Coin</th>
            <th className="text-center"scope="col">Price (USD)</th>
            <th className="text-center"scope="col">24h</th>
            <th className="text-center"scope="col">Market Cap</th>
            
          </tr>
        </thead>
        
        <tbody>
          {currentDataSet.map((coin, index) => {
            //console.log(typeof(coin.priceChange_percent));
            return(
              <tr key={index} className="coinRow">
                <td className="text-center justify-content-center">{indexOfFirstItem + index + 1}</td>
                <td className="text-center justify-content-center"><img src={coin.image} alt="logo" style={{height: 30, marginRight: 5}}/>{coin.name} </td>
                <td className="text-center justify-content-center">${coin.price}</td>
                <td className="text-center justify-content-center">
                  <span style={Number(coin.priceChange_percent) > 0 ? {color: 'green'} : {color: 'red'}}>
                    {coin.priceChange_percent.toFixed(2) > 0 ? '+' : ''}{coin.priceChange_percent.toFixed(2)}%
                  </span>
                </td>
                <td className="text-center justify-content-center">{formatNumber(coin.marketCap)}</td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination className="justify-content-center">
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => changePage(index+1)}>
              {index+1}
            </Pagination.Item>
          ))}
        </Pagination>


    </div>
  )
}


export default Market
