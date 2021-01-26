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

            const expectedItemsLength = 1;
            const expectedFinalQuantity = 2;

            assert.equal(items.length, expectedItemsLength);
            assert.equal(quantity, expectedFinalQuantity);
        });

        it('updates correct quantity of one item in basket when two exist', function () {
            const basket = getBasket();

            const milkDescription = 'milk';
            const appleDescription = 'apple';
            const originalQuantity = 1;

            basket.addItem(milkDescription, originalQuantity);
            basket.addItem(appleDescription, originalQuantity);
            basket.addItem(appleDescription, originalQuantity);

            const items = basket.getItems();
            const { quantity } = items[1];

            const expectedFinalQuantity = 2;

            assert.equal(quantity, expectedFinalQuantity);
        });

        it('adds extra item quantity to existing quantity if item is already in basket', function () {
            const basket = getBasket();

            const description = 'milk';
            const originalQuantity = 1;
            const secondQuantity = 3;

            basket.addItem(description, originalQuantity);
            basket.addItem(description, secondQuantity);

            const items = basket.getItems();
            const { quantity } = items[0];

            const expectedFinalQuantity = 4;

            assert.equal(quantity, expectedFinalQuantity);
        });
    });

    describe('validating quantity', function () {
        it('disallows quantities less than 1', function () {
            const basket = getBasket();

            const description = 'Soup';
            const quantity = 0;

            assert.throws(() => basket.addItem(description, quantity),
                'Quantity must be an integer that is 1 or greater');
        });

        it('disallows non-integer quantities', function () {
            const basket = getBasket();

            const description = 'Soup';
            const quantity = 3.2;

            assert.throws(() => basket.addItem(description, quantity),
                'Quantity must be an integer that is 1 or greater');
        });
    });
});