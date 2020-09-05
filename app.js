'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/

function factorial(n, result = 1) {
    // その１
    /* while(n){
        result = result * n;
        n--;
    }
    return result; */

    // その２
    /* const vec = Array.from(new Array(n)).map((v,i)=> i + 1);
    return vec.reduce((acc, cur) => acc * cur); */

    // その３
    if (n  == 1){
        return result;
    }
    result *= n;
    return factorial(n - 1, result);
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');