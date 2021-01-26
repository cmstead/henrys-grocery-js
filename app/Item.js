class Item{
    constructor(description, quantity) {
        this.description = description;
        this.quantity = quantity;
    }
}

module.exports = {
    Item,
    getItem: (description, quantity) => new Item(description, quantity)
};