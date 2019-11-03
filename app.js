'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
// for 文で階乗計算
function factorial(n) {
    let result = 1;
  for (let i = 1; i <= n; i ++) {
    result *= i;
  }
  return result;
}

// 再帰処理で階乗計算
// function factorial(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  console.log(factorial(20));
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');