/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // Only overflow case: -2^31 / -1 = 2^31, clamp to 2^31 - 1
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    const negative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;

    while (a >= b) {
        let chunk = b;
        let count = 1;
        // double while it still fits
        while (a >= chunk + chunk) {
            chunk += chunk;
            count += count;
        }
        a -= chunk;
        quotient += count;
    }

    return negative ? -quotient : quotient;
};