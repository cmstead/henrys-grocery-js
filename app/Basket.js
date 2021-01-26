const { getItem } = require('./Item');

class Basket {
    constructor() {
        this.items = [];
    }

    addItem(description, quantity) {
        function itemMatchesDescription(item) {
            return item.description === description;
        }

        const existingItem = this.items.find(itemMatchesDescription);

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