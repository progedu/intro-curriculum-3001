'use strict';
/**
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* @returns {Number}
*/
function factorial(n) {
	if (n < 0) { return; };
	let result = 1;
	for (n; n > 0; n--) {
		result *= n;
	}
	return result;
};

const number = process.argv[2] || 0;

const assert = require('assert');
assert.equal(factorial(-1), undefined, `ガード句が作動していません`);
assert.equal(factorial(0), 1, `0の階乗は1ですが、実際は${factorial(0)}でした`);
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10)}でした`);
console.log(factorial(number));
console.log('すべてのテストを通過しました');
