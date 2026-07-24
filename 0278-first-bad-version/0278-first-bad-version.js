/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;

        let m ;
        while (l <= r) {
            m = Math.floor((l+r)/2);
            let f = isBadVersion(m);
            if(f == false){
                l = m+1;
            }else{
                r = m-1;
            }
        }

        return l;
    };
};