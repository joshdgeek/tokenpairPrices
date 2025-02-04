# Crypto Token Price Tracker

## Description
This project is a web application that displays real-time cryptocurrency prices fetched from different cryptocurrency exchanges, including Bitget and Kraken. It dynamically updates the prices of specified trading pairs (e.g., BTC/USDT, ETH/USDT) on a user-friendly table.

## Features
- Fetches real-time cryptocurrency prices from Bitget and Kraken.
- Displays prices for selected trading pairs in a responsive table.
- Simple, lightweight, and uses modern JavaScript and HTML with Tailwind CSS for styling.

## Technologies Used
- **HTML**: For structuring the application.
- **JavaScript**: For fetching and displaying real-time data.
- **Tailwind CSS**: For styling the application.
- **Fetch API**: For making HTTP requests to the cryptocurrency exchange APIs.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. Open the project in your favorite text editor.

3. Open the application in your browser at `http://127.0.0.1:5500` (or the address provided by your local server).

## Usage

1. Ensure you have a stable internet connection.
2. Open the `index.html` file in your browser.
3. View the live prices of the specified cryptocurrency pairs.


## Supported Trading Pairs
### Bitget
- BTC/USDT
- ETH/USDT
- BNB/USDT
- SOL/USDT

### Kraken
- BTC/USDT
- ETH/USDT
- SOL/USDT
- (BNB/USDT is not supported)

## API Documentation

### Bitget API
- Endpoint: `https://api.bitget.com/api/v2/mix/market/symbol-price`
- Parameters: `productType=usdt-futures`, `symbol={symbol}`

### Kraken API
- Endpoint: `https://api.kraken.com/0/public/Ticker`
- Parameters: `pair={symbol}`

### Notes:
- Bitget symbols are formatted as `BTCUSDT`.
- Kraken uses specific mappings for symbols (e.g., `XBTUSDT` for BTC/USDT).

## Troubleshooting

1. **CORS Errors:**
   - Use an extension like Moesif-Origin to walk around this

2. **Unsupported Pairs:**
   - The application handles unsupported pairs by displaying "N/A".

3. **API Errors:**
   - Ensure you have a stable internet connection.
   - Check the API status on the respective exchange's website.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request in the main repository.


---

Feel free to reach out with feedback or suggestions for improvement!

