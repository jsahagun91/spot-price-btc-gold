import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BitcoinPrice() {
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    
    useEffect(() => {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
            .then((response) => {
                // Remove commas from the string then convert it to a number
                let priceWithoutCommas = response.data.bpi.USD.rate.replace(/,/g, '');
                let roundedPrice = parseFloat(priceWithoutCommas).toFixed(2);
                // Convert back to string and add commas
                setBitcoinPrice(parseFloat(roundedPrice).toLocaleString('en-US', {minimumFractionDigits: 2}));
            });
    }, []);

    return <div class="btc-card">&#x20BF; Bitcoin: ${bitcoinPrice}</div>;
}

export default BitcoinPrice;
