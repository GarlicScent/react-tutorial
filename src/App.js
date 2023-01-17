import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [asset, setAsset] = useState();
	const [selectedCoin, setSelectedCoin] = useState();
	const [symbol, setSymbol] = useState("");
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				// console.log(json);
				setCoins(json);
				setLoading(false);
				setSelectedCoin(json[0].quotes.USD.price);
			});
	}, []);

	const moneyToCoin = (event) => {
		setAsset(event.target.value);
	};
	const onSelect = (event) => {
		const priceAndSymbol = event.target.value.split(" ");
		setSelectedCoin(priceAndSymbol[0]);
		setSymbol(priceAndSymbol[1]);
	};
	return (
		<div>
			<h1>The Coins! ({coins.length})</h1>
			{loading ? <strong>Loading...</strong> : null}
			<select onChange={onSelect}>
				{coins.map((coin, index) => {
					return (
						<option
							key={coin.id}
							value={coin.quotes.USD.price + " " + coin.symbol}
						>
							{coin.name} ({coin.symbol}):{" "}
							{coin.quotes.USD.price + " "}
							USD($)
						</option>
					);
				})}
			</select>
			<br />
			{loading ? null : (
				<input
					type="number"
					placeholder="Write your money in USD"
					onChange={moneyToCoin}
					style={{ width: "300px" }}
				/>
			)}
			<h3>
				You can buy{" "}
				{asset && selectedCoin
					? Math.floor((asset / parseInt(selectedCoin)) * 1000) /
							1000 +
					  " Coins. of " +
					  symbol
					: "Nothing with that money!!"}
			</h3>
		</div>
	);
}

export default App;
