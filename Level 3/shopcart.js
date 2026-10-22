const cart = {
    items: [],

    addProduct: function(product) {
        const found = this.items.find(item => item.id === product.id);

        if (found) {
            found.quantity += product.quantity;
        } else {
            this.items.push(product);
        }
    },

    removeProduct: function(id) {
        this.items = this.items.filter(item => item.id !== id);
    },

    getTotal: function() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity, 0
        );
    }
};

cart.addProduct({ id: 1, name: "candy", price: 10000, quantity: 2 });
cart.addProduct({ id: 1, name: "tissue", price: 10000, quantity: 1 });

console.log("Basket:", cart.items);
console.log("Total: Rp" + cart.getTotal());

cart.removeProduct(1);
console.log("After deleted:", cart.items);