'use strict';
/**
* @param {Number} n
* @returns {Number}
*/
function kaijou(n) {
    let result = 1;
for(let i = 1; i <= n; i++ ){
    result = result * i;
}
    return result;
  }

const assert = require('assert');
assert.equal(kaijou(1), 1, `1の階乗は1ですが、実際は${kaijou(1)}でした`);
assert.equal(kaijou(2), 2, `2の階乗は2ですが、実際は${kaijou(2)}でした`);
assert.equal(kaijou(3), 6, `3の階乗は6ですが、実際は${kaijou(3)}でした`);
assert.equal(kaijou(10), 3628800, `10の階乗は3628800ですが、実際は${kaijou(10)}でした`);
console.log('すべてのテストを通過しました');