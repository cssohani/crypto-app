import React from "react"
import '../styles/Footer.css'
import coingecko from '../assets/coingecko.png'

const Footer = () => <footer className="background page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={coingecko} alt="Coin Gecko Logo" />
                <h5 className="text-uppercase">COIN GECKO</h5>
                <p>All cryptocurrency market data is provided by the CoinGecko API</p>
                <p> and is updated every 24h!</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="links col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#market">Market</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#discord">Discord</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright
        <a></a>
    </div>

</footer>

export default Footer