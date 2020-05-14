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
// 連番の生成
const range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (_, i) => start + i);
// 階乗
const reducer = (accumulator: number, currentValue: number) => accumulator * currentValue;
function factorial(n: number) {
    let result: number;
    // 引数が1以下の場合には引数を結果とする
    if ( n <= 1) {
        result = n;
        return result;
    } else {
        const targetArray: Array<number> = range(1, n);
        result = targetArray.reduce(reducer);
        return result;
    }
}

assertEquals(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assertEquals(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assertEquals(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assertEquals(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');