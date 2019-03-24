'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) { //再帰
    if (n < 0) return n;

    if (n === 0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function factorial1(n) {// 末尾再帰(最適化されてないっぽい？)
    if (n < 0) return n;

    function fact(acc,n) {
        if (n === 1) {
            return acc;
        } else {
            return fact(acc*n,n-1);
        }
    }
    return fact(1,n);
}

/**
 * nからmまでの整数の配列を返す
 * @param {Number} n 初期値
 * @param {Number} m 最終値
 * @returns {Array}
 */
function range(n,m) {
    return Array.from(Array(m-n+1),(e,i) => i + n);
}

function factorial2(n) {//高階関数
    return range(1,n).reduce((acc,n) => acc*n,1);
}
function factorial3(n) {//for文
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);

assert.equal(factorial1(1), 1, `1の階乗は1ですが、実際は${factorial1(1) }でした`);
assert.equal(factorial1(2), 2, `2の階乗は2ですが、実際は${factorial1(2) }でした`);
assert.equal(factorial1(3), 6, `3の階乗は6ですが、実際は${factorial1(3) }でした`);
assert.equal(factorial1(10), 3628800, `10の階乗は3628800ですが、実際は${factorial1(10) }でした`);

assert.equal(factorial2(1), 1, `1の階乗は1ですが、実際は${factorial2(1) }でした`);
assert.equal(factorial2(2), 2, `2の階乗は2ですが、実際は${factorial2(2) }でした`);
assert.equal(factorial2(3), 6, `3の階乗は6ですが、実際は${factorial2(3) }でした`);
assert.equal(factorial2(10), 3628800, `10の階乗は3628800ですが、実際は${factorial2(10) }でした`);

assert.equal(factorial3(1), 1, `1の階乗は1ですが、実際は${factorial3(1) }でした`);
assert.equal(factorial3(2), 2, `2の階乗は2ですが、実際は${factorial3(2) }でした`);
assert.equal(factorial3(3), 6, `3の階乗は6ですが、実際は${factorial3(3) }でした`);
assert.equal(factorial3(10), 3628800, `10の階乗は3628800ですが、実際は${factorial3(10) }でした`);

console.log('すべてのテストを通過しました');