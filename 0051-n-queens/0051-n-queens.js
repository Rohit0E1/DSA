/**
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function (n) {
//     let k = [];
//     let res = [];


//     const markStraightPath = (i, j, char) => {
//         if (!k[i]) return;
//         let match = char == '#' ? '.' : '#';
//         let m = i;
//         while (k[m]) {
//             m++;
//             if (k[m] && k[m][j] == match) {
//                 k[m][j] = char;
//             }
//         }
//         let a = j;
//         while (k[i][a]) {
//             a++;
//             if (k[i][a] && k[i][a] == match) {
//                 k[i][a] = char;
//             }
//         }
//     }



//     const markCornerPath = (i, j, char) => {
//         let match = char == '#' ? '.' : '#';

//         // down-right
//         let x = i + 1;
//         let y = j + 1;

//         while (x < n && y < n) {
//             if (k[x][y] == match) {
//                 k[x][y] = char;
//             }
//             x++;
//             y++;
//         }

//         // down-left
//         x = i + 1;
//         y = j - 1;

//         while (x < n && y >= 0) {
//             if (k[x][y] == match) {
//                 k[x][y] = char;
//             }
//             x++;
//             y--;
//         }

//         // up-right
//         x = i - 1;
//         y = j + 1;

//         while (x >= 0 && y < n) {
//             if (k[x][y] == match) {
//                 k[x][y] = char;
//             }
//             x--;
//             y++;
//         }

//         // up-left
//         x = i - 1;
//         y = j - 1;

//         while (x >= 0 && y >= 0) {
//             if (k[x][y] == match) {
//                 k[x][y] = char;
//             }
//             x--;
//             y--;
//         }
//     };




//     const markQueenPath = (i, j, char) => {
//         markStraightPath(i, j, char);
//         markCornerPath(i, j, char);
//     };

//     const backtrack = (i, j, qcount) => {

//         if (!k[i] || !k[i][j] || k[i][j] !== '.') return;

//         k[i][j] = "Q";
//         qcount++;

//         if (qcount == n) {
//             res.push(
//                 k.map(row =>
//                     row.map(cell => cell === "Q" ? "Q" : ".").join("")
//                 )
//             );

//             k[i][j] = ".";
//             return;
//         }

//         markQueenPath(i, j, '#');

//         for (let m = 0; m < n; m++) {
//             if (k[i + 1][m] == '.') {
//                 backtrack(i + 1, m, qcount);
//             }
//         }

//         markQueenPath(i, j, '.');
//         k[i][j] = '.';
//     };


//     for (let i = 0; i < n; i++) {
//         const filledArray = new Array(n).fill('.');
//         k.push([...filledArray])
//     };

//     for (let j = 0; j < n; j++) {
//             backtrack(0, j, 0);
//     }

//     return res;
// };

var solveNQueens = function (n) {
    let tra = [];
    let res = [];

    for (let i = 0; i < n; i++) {
        const filledArray = new Array(n).fill('#');
        tra.push([...filledArray])
    };

    for (let j = 0; j < n; j++) {
        backtrack(0, j, 0, tra);
    };

    function backtrack(i, j, qcou, arr) {
        arr[i][j] = 'Q';
        qcou++;
        markQueenPath(i, j, ".", arr, n, qcou);

        if (arr[i + 1]) {
            for (let m = 0; m < n; m++) {
                if (arr[i + 1][m] == "#") {
                    backtrack(i + 1, m, qcou, arr)
                }
            }
        }


        if (qcou == n) {
            res.push(
                arr.map(row =>
                    row.map(cell => cell === "Q" ? "Q" : ".").join("")
                )
            );
        }


        console.log(arr, `${qcou} queens.................`);

        unmarkQueenPath(arr, qcou);
        arr[i][j] = '#';
        qcou--;

        console.log(arr, `${qcou} queens.................`);
    };

    return res;
}


const unmarkQueenPath = (arr, qcou) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j], qcou)
            if (Number(arr[i][j]) == Number(qcou)) {
                arr[i][j] = "#";
            }
        }
    }
}

const markStraightPath = (i, j, char, k, n, qcou) => {
    if (!k[i]) return;
    let match = char == '#' ? '.' : '#';
    let m = i;
    while (k[m]) {
        m++;
        if (k[m] && k[m][j] == match) {
            k[m][j] = qcou;
        }
    }
    let mn = i;
    while (k[mn]) {
        mn--;
        if (k[mn] && k[mn][j] == match) {
            k[mn][j] = qcou;
        }
    };


    let a = j;
    while (k[i][a]) {
        a++;
        if (k[i][a] && k[i][a] == match) {
            k[i][a] = qcou;
        }
    };
    let te = j;
    while (k[i][te]) {
        te--;
        if (k[i][te] && k[i][te] == match) {
            k[i][te] = qcou;
        }
    }
}



const markCornerPath = (i, j, char, k, n, qcou) => {
    let match = char == '#' ? '.' : '#';

    // down-right
    let x = i + 1;
    let y = j + 1;

    while (x < n && y < n) {
        if (k[x][y] == match) {
            k[x][y] = qcou;
        }
        x++;
        y++;
    }

    // down-left
    x = i + 1;
    y = j - 1;

    while (x < n && y >= 0) {
        if (k[x][y] == match) {
            k[x][y] = qcou;
        }
        x++;
        y--;
    }

    // up-right
    x = i - 1;
    y = j + 1;

    while (x >= 0 && y < n) {
        if (k[x][y] == match) {
            k[x][y] = qcou;
        }
        x--;
        y++;
    }

    // up-left
    x = i - 1;
    y = j - 1;

    while (x >= 0 && y >= 0) {
        if (k[x][y] == match) {
            k[x][y] = qcou;
        }
        x--;
        y--;
    }
};




const markQueenPath = (i, j, char, k, n, qcou) => {
    markStraightPath(i, j, char, k, n, qcou);
    markCornerPath(i, j, char, k, n, qcou);
};
