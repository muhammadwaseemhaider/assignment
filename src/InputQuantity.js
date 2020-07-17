import React from 'react';
import { get } from './get';
import optimize from './optimize';

import './App.css';

export const InputQuantity = () => {
    const priceArray = get();
    console.log("priceArray", priceArray.map((key,i) => (key.map((key2) => ( [key2.type, key2.name,key2.quantity, key2.price] )))  ));

return priceArray.map((row, id) => (row.map((row2, id2) => 
( (row2.type==="piece") ?
        <p>
       <label for={row2.name}>{row2.name}</label>
       <input type="text" placeholder="Enter Quantity" name={row2.name} onInput={(e)=> optimize(e.target.value, e.target.name)}></input>
        <div>
        <label id={row2.name} ></label>
        </div>
       </p>
    : null )
)))
}

export default InputQuantity;