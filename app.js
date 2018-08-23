'use strict';
const number = process.argv[2] || 0; // コマンドラインで与えられた引数。無い場合は 0 を代入

/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n - 階乗を求める自然数
* @returns {Number} 階乗
*/
function factorial(n) {
    let result = 1; // 結果を一旦 1 として定義
    for (let i = 1; i <= n; i++) { // ループ毎に n 引数以下の範囲で i 変数をインクリメントする
        result *= i; // result 変数に i 変数の値を掛けることを繰り返す
    }
    return result; // 階乗を返す
}
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');

console.log(factorial(number)); // 階乗を求める関数を実行し、結果をコンソールに表示
