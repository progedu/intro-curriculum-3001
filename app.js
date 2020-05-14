'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
* require('assert) を変更する
* Import maps を使用してライブラリを管理する
* maps.json を作成し、インポート対象とURLを管理する
* deno 実行時にオプション --importmap=maps.json --unstable を付与する
*/
import { assertEquals } from 'assert';
function factorial(n) {
    let result = 1;
    // TODO このコメントを消して正しく実装してください。
    return result;
}
assertEquals(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assertEquals(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assertEquals(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assertEquals(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');