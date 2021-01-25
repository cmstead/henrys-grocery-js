class Basket{
    constructor(){
        this.items = [];
    }

    addItem(description, quantity) {
        this.items.push({
            description,
            quantity
        });
    }

    getItems() {
        return this.items;
    }
}

module.exports = {
    Basket,
    getBasket: () => new Basket()
}