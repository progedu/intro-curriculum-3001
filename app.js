'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
var sm = [ ]; sm[ 0 ] = 1;
for(let i=1; i<=15; i++) {
    sm [ i ] = sm [ i - 1 ] * i;
}

function factorial(n) {
    return sm[ n ] ;
}
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }が出力されました`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }が出力されました`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }が出力されました`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }が出力されました`);
console.log('すべてのテストを通過しました');
// AC!