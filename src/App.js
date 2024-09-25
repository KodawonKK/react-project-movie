import { useState, useEffect } from "react";

function App() {
  const [loading, setLodading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLodading(false);
        console.log(json);
      });
  }, []);
  return (
    <div>
      <h1>The coins!{loading ? "" : coins.length}</h1>
      <input></input>
      <button>Search</button>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
