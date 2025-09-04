function calculateFinalPrice(productValue, applyDiscount) {
    const result = productValue - applyDiscount
    return result
}

module.exports = {
    calculateFinalPrice
}