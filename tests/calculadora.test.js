const { calculateFinalPrice } = require('../src/calculadoraDesconto');

const finalPurchaseValue  = calculateFinalPrice (50, 10);
console.log(finalPurchaseValue);