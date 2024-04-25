import React from 'react'
import '../styles/Home.css'
import { Button } from 'react-bootstrap'

const Home = ({dashCoins}) => {
    return(
        <div className="home" id="home">
            <div className="title text-center text-white">
                <h1>Keep <span style={{color: '#ffc107'}}>track</span> of your</h1>
                <h1><span style={{color: '#ffc107'}}>crypto</span> currencies.</h1>
            </div>
            <div  className="top-coins d-flex justify-content-evenly">
                {dashCoins.map((coin) => {
                    return(
                        
                        <div className="text-center">
                            <img src={coin.image} alt={coin.name} style={{height:100}}/>
                            <div className="coin">{coin.name} <span style={Number(coin.priceChange_percent) > 0 ? {color: 'green'} : {color: 'red'}}>
                                {coin.priceChange_percent.toFixed(2) > 0 ? '+' : ''}{coin.priceChange_percent.toFixed(2)}%</span>
                            </div>
                            
                            <div className="coin">${coin.price}</div>
                        </div>
                        
                        
                    )
                })}
            </div>
            <Button variant="warning" className="button" href="#market">Go To Market</Button>
        </div>
        
    )
}

export default Home
