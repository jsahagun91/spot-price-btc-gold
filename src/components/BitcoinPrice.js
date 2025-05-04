import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BitcoinPrice() {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
            .then(response => {
                const btcPrice = response.data.bitcoin.usd;
                setPrice(btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2 }));
            })
            .catch(error => {
                console.error('Error fetching price:', error);
            });
    }, []);

    return <div className="btc-card">₿ Bitcoin: ${price}</div>;
}

export default BitcoinPrice;