const { getItem } = require('./Item');

class Basket {
    constructor() {
        this.items = [];
    }

    addItem(description, quantity) {
        const existingItem = this.items.find(
            item => item.matchDescription(description));

        if (Boolean(existingItem)) {
            existingItem.updateQuantity(quantity);
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