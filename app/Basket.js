const { getItem } = require('./Item');

class Basket {
    constructor() {
        this.items = [];
    }

    addItem(description, quantity) {
        const existingItem = this.items.find(item => item.description = description);
        
        if (Boolean(existingItem)) {
            existingItem.quantity += quantity;
        } else {
            const newItem = getItem(description, quantity);
            this.items.push(newItem);
        }
    }

    getItems() {
        return this.items;
    }
}

module.exports = {
    Basket,
    getBasket: () => new Basket()
}