const tokenPair = ["BTCUSDT", "ETHUSDT", "BNBUSDT", "SOLUSDT"];
const classes = [".btc-usdt", ".eth-usdt", ".bnb-usdt", ".sol-usdt"]; // Valid class names

let price;

const getBitgetPrices = async () => {
    try {
        for (let pair = 0; pair < tokenPair.length; pair++) {
            // field = document.querySelector(classes[pair]); // Uncomment to update DOM
            const symbol = tokenPair[pair]; // Iterate through each pair

            // Fetch data from the API
            const url = `https://api.bitget.com/api/v2/mix/market/symbol-price?productType=usdt-futures&symbol=${symbol}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            // Check if price data exists
            if (data && data.data && data.data[0]) {
                price = data.data[0].price; // Correctly extract price
                console.log(`${symbol} Price: ${price}`);
                // field.innerHTML = price; // Uncomment to update DOM
            } else {
                console.warn(`Price not found for ${symbol}`);
                // field.innerHTML = "N/A"; // Uncomment to handle missing price
            }

            document.querySelector(`${classes[pair]}-bitget`).innerHTML = price
        }
    } catch (error) {
        console.error("Error fetching prices from Bitget:", error.message);
    }
};

// Call the function
getBitgetPrices();
