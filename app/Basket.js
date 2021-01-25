class Basket {
    constructor() {
        this.items = [];
    }

    addItem(description, quantity) {
        const existingItem = this.items.find(item => item.description = description);

        if (Boolean(existingItem)) {
            existingItem.quantity++;
        } else {
            this.items.push({
                description,
                quantity
            });
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