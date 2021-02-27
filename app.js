'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
    let result = 1;
    for (let i = n; i>=1; i--) { 
        result = result * i;
        console.log("iが"+i+"のとき"+result); //2020授業より
    //if (n<0){return 0;}; //2019あさづけさんプルリクより
    //let result = 1;
    //for (n;n>0; n--){
      //  result *=n;      //ここまで
    }
    return result;
}
const assert = require('assert');
//assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
//assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
//assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
factorial(10) ;//`10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');