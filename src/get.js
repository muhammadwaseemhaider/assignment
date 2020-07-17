const data = {
    "pricelist": [
    {
    "piece": {"name": "Bottle",  "quantity": 1, "price": 5},
    "pack" : {"name": "11-pack", "quantity": 11, "price": 40},
    "box"  : {"name": "Big box", "quantity": 24, "price": 950}
    },
    {
    "piece": {"name": "Chocolate bar", "quantity": 1, "price": 3},
    "pack": {"name": "Chocolate pack", "quantity": 5, "price": 14}
    },
    {
    "piece": {"name": "Biscuit", "quantity": 3, "price": 4}
    }
    ]
    }

    export const get = () => {
      
        const priceData = Object.keys(data.pricelist)
        .map((key) => (
        Object.entries(data.pricelist[key])
        .map( (key) => ({
        type: key[0],
        name: key[1].name, 
        quantity: key[1].quantity,
        price: key[1].price}) 
        )));
        console.log("Price Data", priceData.map((key) => (key)));

        return priceData;

    }