const tokenPair = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT"];
const krakenMapping = {
    BTCUSDT: "XBTUSDT",
    ETHUSDT: "ETHUSDT",
    BNBUSDT: "ETHUSDT",
    SOLUSDT: "SOLUSDT",
};
const classes = [".btc-usdt", ".eth-usdt", ".bnb-usdt", ".sol-usdt"]; // Valid class names

const getKrakenPrices = async () => {
    try {
        for (let pair = 0; pair < tokenPair.length; pair++) {
            const symbol = tokenPair[pair]; // Original pair name
            const krakenSymbol = krakenMapping[symbol]; // Convert to Kraken's symbol format

            // Fetch data from the API
            const url = `https://api.kraken.com/0/public/Ticker?pair=${krakenSymbol}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                // Extract the correct data field from the API response
                const targetData = data.result[krakenSymbol]?.c[0];
                console.log(`${symbol} Price: ${targetData}`);

                // Check if price data exists

                // Update the DOM with the price
                document.querySelector(`${classes[pair]}-kraken`).textContent = targetData;
            } else {
                console.log(`Price not found for ${symbol}`);
                document.querySelector(`${classes[pair]}-kraken`).textContent = "N/A";
            }
        }
    } catch (error) {
        console.error("Error fetching prices from Kraken:", error.message);
    }
};

// Call the function
getKrakenPrices();


//"https://api.kraken.com/0/public/Ticker?pair=BTCUSDT"