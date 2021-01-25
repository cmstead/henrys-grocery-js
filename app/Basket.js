class Basket {
    constructor() {
        this.items = [];
    }

    getNewItem(description, quantity) {
        return {
            description,
            quantity
        };
    }

    addItem(description, quantity) {
        const existingItem = this.items.find(item => item.description = description);
        
        if (Boolean(existingItem)) {
            existingItem.quantity++;
        } else {
            const newItem = this.getNewItem(description, quantity);
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