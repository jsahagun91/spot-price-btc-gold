import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GoldPrice() {

    // const apiKey = process.env.REACT_APP_GOLD_API_KEY;
    const [goldPrice, setGoldPrice] = useState(null);

    
  
      useEffect(() => {

        const headers = {
            'x-access-token': 'goldapi-3c2ecrlfrb9kti-io',
            'Content-Type': 'application/json'
          };
      
      axios
      .get('https://www.goldapi.io/api/XAU/USD', { headers })
      .then((res) => {
        setGoldPrice(res.data.price.toFixed(2));
      })
      .catch((error) => console.log(error)); 
    }, []);

    return <div className='xau-card'>&#x1F71A; Gold: ${goldPrice}</div>;
}


export default GoldPrice;
