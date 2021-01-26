const { match } = require('matchlight');

function isInt(value) {
    return Math.floor(value) === value
}

class Item{
    constructor(description, quantity) {
        function isIntGreaterThan0(value) {
            return isInt(value) && value > 0;
        }

        if(!isIntGreaterThan0(quantity)) {
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