import React from 'react';
import './App.css';
import PriceList from './PriceList';
import InputQuantity from './InputQuantity';

function App() {
        
  return (
    <div className="container">
      <header className="App-header">Price Optimizer</header>
      <table className="table">
        <tr><th>Type</th><th>Name</th><th>Quantity</th><th>Price</th></tr>
        <PriceList/>
      </table>
        <InputQuantity/>
    </div>
  );
}

export default App;
