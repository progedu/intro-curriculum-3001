'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
    // TODO このコメントを消して正しく実装してください。
    //1以上の階乗を求める関数を実装する
    let result = 1;
    //関数実行時に与えられる数字がn
    //iは１から始まる
    //iが与えられた数字よりも小さい時
    //iに１を足していく
    //例えばn=5の時は、reult = 1*1 result =1*2 result =2*3 result=6*4 result=24*5
    for(let i = 1; i <= n; i++){
        result = result *i;
    }


    return result;
}
const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');