/**
 * @param {number} num
 * @return {string}
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

    const hex = "0123456789abcdef";
    let res = "";

    // Convert to unsigned 32-bit integer
    num = num >>> 0;

    while (num > 0) {
        let digit = num & 15;   // same as num % 16
        res = hex[digit] + res;
        num = num >>> 4;        // divide by 16
    }

    return res;
};