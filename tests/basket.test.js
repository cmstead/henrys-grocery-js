const { assert } = require('chai');

const { getBasket } = require('../app/Basket');

describe('Basket', function () {
    describe('adding items', function () {
        it('adds a single item to basket', function () {
            const basket = getBasket();

            const originalDescription = 'bread';
            const originalQuantity = 1;

            basket.addItem(originalDescription, originalQuantity);

            const items = basket.getItems();
            const { description, quantity } = items[0];

            assert.equal(items.length, 1);
            assert.equal(description, 'bread');
            assert.equal(quantity, 1);
        });
    });
});