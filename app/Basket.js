class Basket{
    constructor(){
        this.items = [];
    }

    addItem(description, quantity) {
        if(this.items.find(item => item.description = description)) {
            let item = this.items.find(item => item.description = description);
            item.quantity++;
        } else {
            this.items.push({
                description,
                quantity
            });    
        }
    }

    getItems() {
        return this.items;
    }
}

module.exports = {
    Basket,
    getBasket: () => new Basket()
}