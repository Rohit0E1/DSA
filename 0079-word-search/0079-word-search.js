/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let res = false;


    const wordMatcher = (row, col, wordi, map) => {
        if (word.length == wordi) {
            console.log(word, wordi)
            res = true;
            return;
        }
        if ( !map.has(String(row+1) + String(col)) && board[row + 1] && board[row + 1][col] == word[wordi]) {
            map.set(String(row+1) + String(col));
            wordMatcher(row + 1, col, wordi + 1, map);
            map.delete(String(row+1) + String(col))
        }
        if ( !map.has(String(row-1) + String(col)) && board[row - 1] && board[row - 1][col] == word[wordi]) {
            map.set(String(row-1) + String(col));
            wordMatcher(row - 1, col, wordi + 1, map);
            map.delete(String(row-1) + String(col))
        }
        if ( !map.has(String(row) + String(col+1)) && board[row][col + 1] && board[row][col + 1] == word[wordi]) {
            map.set(String(row) + String(col+1));
            wordMatcher(row, col + 1, wordi + 1, map);
            map.delete(String(row) + String(col+1))        
        }
        if ( !map.has(String(row) + String(col-1)) &&board[row][col - 1] && board[row][col - 1] == word[wordi]) {
            map.set(String(row) + String(col-1));
            wordMatcher(row, col - 1, wordi + 1, map);
            map.delete(String(row) + String(col-1))
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (word[0] == board[i][j]) {
                let map = new Map();
                map.set(String(i) + String(j));
                wordMatcher(i, j, 1, map);
            }
        }
    };
    

    return res;

};