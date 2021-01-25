const { subDays, addDays } = require('date-fns');

function getSpecials() {
    return [
        {
            description: 'Buy 2 tins of soup and get a loaf of bread half price',
            startDate: subDays(new Date(), 1),

            doesDiscountApply: () => false,
            calculateDiscount: () => null, // See description for expected behavior
            getEndDate: () => null // this one should be 7 days out from start
        },
        {
            description: 'Apples have a 10 % discount',
            startDate: addDays(new Date(), 3),
            
            doesDiscountApply: () => false,
            calculateDiscount: () => null, // See description for expected behavior
            getEndDate: () => null // This should be end of the following month 
        }
    ];
}

module.exports = {
    getSpecials
};