/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let res = false;


    const wordMatcher = (row, col, wordi) => {
        if (word.length == wordi) {
            console.log(word, wordi)
            res = true;
            return;
        }
        let temp = board[row][col];
        board[row][col] = "#"
        if (board[row + 1] && board[row + 1][col] == word[wordi]) {
            wordMatcher(row + 1, col, wordi + 1);
        }
        if (board[row - 1] && board[row - 1][col] == word[wordi]) {
            wordMatcher(row - 1, col, wordi + 1);
        }
        if ( board[row][col + 1] && board[row][col + 1] == word[wordi]) {
            wordMatcher(row, col + 1, wordi + 1);        
        }
        if (board[row][col - 1] && board[row][col - 1] == word[wordi]) {
            wordMatcher(row, col - 1, wordi + 1);
        }
        board[row][col] = temp;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (word[0] == board[i][j]) {
                wordMatcher(i, j, 1);
            }
        }
    };
    

    return res;

};