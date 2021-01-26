const { match } = require('matchlight');

function isInt(value) {
    return Math.floor(value) === value
}

function isIntGreaterThan0(value) {
    return isInt(value) && value > 0;
}

class Item{
    constructor(description, quantity) {
        match(quantity, (on, onDefault) => {
            on(isIntGreaterThan0, 
                (quantity) => { this.quantity = quantity; });
            onDefault(
                () => { 
                    const message = 'Quantity must be an integer that is 1 or greater';
                    throw new Error(message); });
        });

        this.description = description;
    }

    updateQuantity(quantity) {
        this.quantity += quantity;
    }
}

module.exports = {
    Item,
    getItem: (description, quantity) => new Item(description, quantity)
};