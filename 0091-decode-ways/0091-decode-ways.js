/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let map = new Map();
    function deduct(remS) {
        if (remS === '') return 1;
        if (remS === '0') return 0;
        if(map.has(remS)) return map.get(remS)

        let n = remS.length;

        let one = remS.substring(n-1);
        let two = remS.substring(n-2);

        let ans = 0;

        if(one != 0){
            ans += deduct(remS.substring(0,n-1))
        }

        if(two >= 10 && two <= 26){
            ans += deduct(remS.substring(0,n-2))
        }
        
        map.set(remS, ans)
        return ans;
    }


    return deduct(s);
};