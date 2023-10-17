import React from 'react';
import BitcoinPrice from './components/BitcoinPrice';
import GoldPrice from './components/GoldPrice';
import SilverPrice from './components/SilverPrice';

import './App.css';

function App() {
  return (
    <div className="App">
      <BitcoinPrice />
      <GoldPrice />
      <SilverPrice />
    </div>
  );
}

export default App;
