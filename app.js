'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} number
* @returns {Number}
*/
const number = process.argv[2] || 0;

function factorial(number) {
    let result = 1;
    for(let i = 1; i <= number; i++) {
        console.log("iが" + i + "のとき" + result);
        result = result * i;
    }
    return result;
}

// console.log(factorial(number));
factorial(number);
