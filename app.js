'use strict';
const memo = New Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2. 1);
function trib(n) {
 if (memo.has(n)) {
   return memo.get(n)
}
 const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
 memo.set(n, value);   
}
const length = 40;
for (let i = o; i <= length; i++) {
    console,log(trib(i));
    
