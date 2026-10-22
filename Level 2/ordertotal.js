const order = {
    items :[
        {name:"Milk", price: 10000, quantity: 2},
        {name: "Loaf", price: 14000, quaantity: 3},
        {name: "nutella", price: 25000, quantity: 1}
    ],

    getTotal: function() {
        return (10000 * 2) + (14000 * 3) + (25000 * 1);
    }
};

console.log("Total:", order.getTotal());