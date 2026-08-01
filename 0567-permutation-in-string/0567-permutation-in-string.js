/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map();
    for (let i = 0; i < s1.length; i++) {
        map.set(s1[i], (map.get(s1[i]) ?? 0) + 1);
    }
    let win = s1.length;
    let cmap = new Map(map);
    for (let j = 0; j + win <= s2.length; j++) {
        if (checkValid(s2.slice(j, j + win), map)) return true;
        map = new Map(cmap);
    }
    return false;
};

const checkValid = (arr, map) => {
    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i])) return false;
        map.set(arr[i], map.get(arr[i]) - 1);
    }
    return true;
};
