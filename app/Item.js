class Item{
    constructor(description, quantity) {
        if(quantity < 1) {
            throw new Error('Quantity must be an integer that is 1 or greater');
        }

        this.description = description;
        this.quantity = quantity;
    }
}

module.exports = {
    Item,
    getItem: (description, quantity) => new Item(description, quantity)
};