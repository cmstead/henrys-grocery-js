const { getItem } = require('./Item');

class Basket {
    constructor() {
        this.items = [];
    }

    addNewItem(description, quantity) {
        const newItem = getItem(description, quantity);
        this.items.push(newItem);
    }

    addItem(description, quantity) {
        const existingItem = this.items.find(
            item => item.matchDescription(description));

        if (Boolean(existingItem)) {
            existingItem.updateQuantity(quantity);
        } else {
            this.addNewItem(description, quantity)
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