function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i === 0) return false;
    return true;
}

function isFibonacci(n) {
    const isPerfectSquare = x => Number.isInteger(Math.sqrt(x));
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function isEven(n) {
    return n % 2 === 0;
}

module.exports = { isPrime, isFibonacci, isEven };
