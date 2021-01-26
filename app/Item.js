const { match } = require('matchlight');

class Item{
    constructor(description, quantity) {
        function isInt(value) {
            return Math.floor(value) === value
        }

        if(quantity < 1 || !isInt(quantity)) {
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