const tokenPair = ["BTC-USDT", "ETH-USDT", "BNB-USDT", "SOL-USDT"];
const classes = [".btc-usdt", ".eth-usdt", ".bnb-usdt", ".sol-usdt"]; // Valid class names

let price;

const getKucoinPrices = async () => {
    try {
        for (let pair = 0; pair < tokenPair.length; pair++) {
            // field = document.querySelector(classes[pair]); // Uncomment to update DOM
            const symbol = tokenPair[pair]; // Iterate through each pair

            // Fetch data from the API
            const url = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${symbol}`;
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data);

            // Check if price data exists
            if (data.data.price) {
                price = data.data.price; // Correctly extract price
                console.log(`${symbol} Price: ${price}`);
                // field.innerHTML = price; // Uncomment to update DOM
            } else {
                console.warn(`Price not found for ${symbol}`);
                // field.innerHTML = "N/A"; // Uncomment to handle missing price
            }

            document.querySelector(`${classes[pair]}-kucoin`).innerHTML = price
        }
    } catch (error) {
        console.error("Error fetching prices from MEXC:", error.message);
    }
};

// Call the function
getKucoinPrices();
