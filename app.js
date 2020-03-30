'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function factorial(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = factorial(n - 1) + factorial(n - 2) + factorial(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(factorial(i));
}