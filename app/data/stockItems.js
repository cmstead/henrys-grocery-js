function getStockItems() {
    return [
        {
            name: "Soup",
            type: "tin",
            price: 0.65
        },
        {
            name: "Bread",
            type: "loaf",
            price: 0.80
        },
        {
            name: "Milk",
            type: "bottle",
            price: 1.30
        },
        {
            name: "Apples",
            type: "single",
            price: 0.10
        }
    ];
}

module.exports = {
    getStockItems
};