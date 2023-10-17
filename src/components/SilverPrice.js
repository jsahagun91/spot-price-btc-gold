import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SilverPrice() {
    const [silverPrice, setSilverPrice] = useState(null);

    
  
      useEffect(() => {

        const headers = {
            'x-access-token': 'goldapi-3c2ecrlfrb9kti-io',
            'Content-Type': 'application/json'
          };
      
      axios
      .get('https://www.goldapi.io/api/XAG/USD', { headers })
      .then((res) => {
        setSilverPrice(res.data.price.toFixed(2)); 
      })
      .catch((error) => console.log(error)); 
    }, []);

    return <div className='xag-card'>&#x1F71B; Silver: ${silverPrice}</div>;
}

export default SilverPrice;
