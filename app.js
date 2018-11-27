'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/

function factorial(n) {
    if (n < 1 || !isInteger(n)) {
        console.log(n);
        return null;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

function isInteger(x) {
    return Math.round(x) === x;
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
assert.equal(factorial(0), null, `0は自然数ではない。${factorial(0) }`);
assert.equal(factorial(-1), null, `-1は自然数ではない。${factorial(-1) }`);
assert.equal(factorial(1.1), null, `1.1は自然数ではない。${factorial(1.1) }`);
assert.equal(factorial("a"), null, `aは自然数ではない。${factorial("a") }`);
console.log('すべてのテストを通過しました');