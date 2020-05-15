'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;

/*
メモ；
let:変数宣言　再代入できるやつ

ループ処理を使うのを思いつきもしなかった。
https://www.nnn.ed.nico/courses/668/chapters/9514

初期化式： 処理の前提になる　ex)let i = 0;だとダメ
条件式：nの回数以内まで
変化式はテンプレート？　
実行したい処理：result = result * 1;

*/

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');