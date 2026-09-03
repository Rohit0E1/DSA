/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = Array(26).fill(0);
    let maxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let curr = tasks[i].charCodeAt() - 65;  // Map 'A'-'Z' to 0-25
        freq[curr]++;
        maxFreq = Math.max(maxFreq, freq[curr]);
    }
    let countMaxFreq = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] === maxFreq) {
            countMaxFreq++;
        }
    }
    let cycles = (maxFreq - 1) * (n + 1) + countMaxFreq;
    return Math.max(tasks.length, cycles);
};
