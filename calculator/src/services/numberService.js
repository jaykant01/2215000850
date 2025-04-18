const { isPrime, isFibonacci, isEven } = require("../utils/validators");
const windowConfig = require("../config/windowConfig");

const windowQueue = [];

function qualifies(number, id) {
    switch (id) {
        case 'p': return isPrime(number);
        case 'f': return isFibonacci(number);
        case 'e': return isEven(number);
        case 'r': return true;
        default: return false;
    }
}

function addAndCalculate(number, id) {
    if (!qualifies(number, id)) return null;

    windowQueue.push(number);
    if (windowQueue.length > windowConfig.windowSize) windowQueue.shift();

    const sum = windowQueue.reduce((a, b) => a + b, 0);
    return +(sum / windowQueue.length).toFixed(2);
}

module.exports = { addAndCalculate };
