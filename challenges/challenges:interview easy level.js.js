const carts = [
    {
        item_name: "Macbook pro",
        price: 1200,
        qty: 1,
    },
    {
        item_name: "Samsung A23",
        price: 800,
        qty: 2,
    },
    {
        item_name: "Xiaomi Airpods",
        price: 200,
        qty: 2,
    },
    {
        item_name: "Xiaomi POCP",
        price: 350,
        qty: 3,
    }
]
// Add VAT (18%) to prices in the shopping cart

// for(var i = 0; i < carts.length; i++) {
//     carts[i].price = carts[i].price * 1.18
// }

const newCarts = carts.map((cart) => ({
    ...cart,
    price: cart.price * 1.18,
}))


console.log(newCarts)

// calculate the total price of the shopping cart 

const calculateTotal = (carts) => {
    let total = 0;
    carts.map((cart) => {
        total +=  cart.price * cart.qty
    })
    return total
}

console.log("Total: ", calculateTotal(carts))