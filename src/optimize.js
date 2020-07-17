import { get } from './get';
import calculate from './calculate';

export const optimize = (n, name) => {

  const priceArray = get();
  const filteredArray  = priceArray.map((key,i) => ( key.findIndex((key2) => ( key2.name=== name )) )  );
  const index=filteredArray.findIndex((element) => element ===0 );
  
  const quantity = priceArray[index].map((key) => key.quantity  )
  const price = priceArray[index].map((key) => key.price  )

  const optimized=calculate(n,price,quantity);
  document.getElementById(name).innerHTML=optimized[0]+" piece(s) "+optimized[1]+" pack(s) "+optimized[2]+" bag(s) costs "
  + parseInt(optimized[0]*(price[0]||0)+optimized[1]*(price[1]||0)+optimized[2]*(price[2]||0))+" euros"
  console.log(optimized[0],price[0],optimized[1],price[1],optimized[2],price[2]);
  console.log("Pieces", name, filteredArray, price, quantity, optimized);
    
}
    
export default optimize;
    