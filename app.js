'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let mul = 1;
    for (let i = 1; i <= n; i++) {
    mul = mul * i;
    // console.log('nは今は'+n);
    // console.log('iは今は'+i);
    // console.log('mulは今は'+mul);
    }
    return mul;
}
const assert = require('assert');

console.log('1について')
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
console.log('2について')
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
console.log('3について')
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
console.log('10について')
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');