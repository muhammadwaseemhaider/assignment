import React from 'react';
import { get } from './get';
import './App.css';

export const PriceList = () => {
    const priceArray = get();
    console.log("priceArray", priceArray.map((key,i) => (key.map((key2) => ( [key2.type, key2.name,key2.quantity, key2.price] )))  ));

return priceArray.map((row, id) => (row.map((row2, id2) =>
    <tr key={id2}> 
    <td>{row2.type}</td>
    <td>{row2.name}</td>
    <td>{row2.quantity}</td>
    <td>{row2.price}</td>
    </tr>)))
}

export default PriceList;