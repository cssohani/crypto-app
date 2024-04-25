import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Market from './components/Market'
import Discord from './components/Discord'
import News from './components/News'
import Footer from './components/Footer'
import './styles/App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'



function App() {

  const [data, setData] = useState([]);
    //const gecko_api = "CG-D8FKjMe9k9cyLCWLTS8QZJty"
    //const coinMarket_api = "c28f0955-78ac-44b6-829d-0cd2b0645a69"
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    
    
  async function getData(){
      const response = await axios.get(url);
      console.log(response.data);
      const coins = response.data.map(coin => {
      return {
          name: coin.name,
          image: coin.image,
          price: coin.current_price,
          priceChange_percent: coin.price_change_percentage_24h,
          marketCap: coin.market_cap
      }});
    
      //console.log(coins);
      setData(coins);
  }

  const dashCoins = data.filter((item, index) => {
    return index >= 0 && index < 4;
  })
    
  useEffect(() => {
      getData();
  }, []);
  
  return (
    <div>
      <NavigationBar />
      <Home dashCoins={dashCoins}/>
      <Market data={data}/>
      <News />
      <Discord />
      <Footer />
    </div>
  );
}

export default App;
