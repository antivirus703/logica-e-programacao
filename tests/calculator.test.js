const { calculateFinalPrice } = require('../src/discountCalculator');
const { expect } = require('chai');

describe('Sum function test', () => {
    
    it('The function should add two numbers', () => {
        const sumResult = calculateFinalPrice(0, 0);
        expect(sumResult).to.equal(0);
    });
    
    it('The function should add two negative numbers', () => {
        const sumResult = calculateFinalPrice(-30, -35);
        expect(sumResult).to.equal(-65);
    });
});