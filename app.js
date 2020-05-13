'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {

    if (n < 0) { return; }; //ガード節
    
    let result = 1;
    // 階乗の計算をする
    for (n; 0 < n; n--) {
        result *= n;
    } // for
    return result;
} // factorial()
const assert = require('assert'); // Node.js のアサーション機能を、オブジェクトとして読み込む
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');

/*Template Literal という機能

` で囲まれている文字列は、 
${プログラム内の値} という形式の文字列を含めることで、 
変数の値を埋め込むことができる 

*/