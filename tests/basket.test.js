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

            const expectedItemsLength = 1;

            assert.equal(items.length, expectedItemsLength);
            assert.equal(description, originalDescription);
            assert.equal(quantity, originalQuantity);
        });

        it('adds item to existing quantity if item is already in basket', function () {
            const basket = getBasket();

            const description = 'milk';
            const originalQuantity = 1;

            basket.addItem(description, originalQuantity);
            basket.addItem(description, originalQuantity);

            const items = basket.getItems();
            const { quantity } = items[0];

            assert.equal(items.length, 1);
            assert.equal(quantity, 2);
        });
    });
});