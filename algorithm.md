#  アルゴリズム
問題を解くための手順を定式化した形で表現したもの。

### フィボナッチ
+ F0=0
+ F1=1
+ FN=F(N-1)+F(N-2)(N>=0)
+ 0,1,1,2,3,5,8,13,21,34....

### 即時実行関数
~~~js
(function(){
    'use strict';
})();
~~~
+ `'use strict';`が即時実行関数ないで実行される

### フィボナッチ数列の実装
0 の時は 0 を返す処理を実装
~~~js
function fib(n){
    if(n===0){
        return 0;
    }
    return null;
}
~~~
1の時は1を返す処理を実装
~~~js
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    return null;
}
~~~
それ以外の時は、前と、前の前のフィボナッチ数を足し合わせた数を返す
~~~js
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
~~~
**再帰**：関数の定義の中で関数自身を呼び出すこと

40 番目まで出力
~~~js
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
~~~
コマンドを実行
```bash
time node app.js
```
結果
```bash
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
6765
10946
17711
28657
46368
75025
121393
196418
317811
514229
832040
1346269
2178309
3524578
5702887
9227465
14930352
24157817
39088169
63245986
102334155

real	0m3.306s
user	0m3.299s
sys	0m0.000s
```
i=100にしたら1日経っても終わらない。

この関数で足し算がされる回数
+ n が２の時の fib(2) は、fib(1) + fib(0)、つまり、0 + 0 + 1で 1回
+ n が３の時の fib(3) は、fib(2) + fib(1)、これは、1 + 0 + 1 で 2回
+ n が４の時の fib(4) は、fib(3) + fib(2)、これは、2 + 1 + 1 で 4回

...

+ n が100の時の fib(100) は、fib(99) + fib(98)、これは、354,224,848,179,261,915,074 + 218,922,995,834,555,169,025 + 1 で 573,147,844,013,817,084,100回

**指数オーダー**:回を重ねると後に倍々に計算回数が増えるような処理の増え方。O記法でO(n^2)。オーダーはアルゴリズムを評価するときの指標になり、グラフで下の方にあるオーダーのほうが性能が良いと評価される。

### プロファイルツール
コマンドツール
```bash
node --prof app.js
ls
```
すると
```bash
app.js  isolate-0x3cc7810-v8.log
```
が生成されるので、
```bash
node --prof-process isolate-0x3cc7810-v8.log 
```
実行すると大量の結果が生成される。
```bash
[Summary]:
   ticks  total  nonlib   name
   2068   88.7%   93.2%  JavaScript
      0    0.0%    0.0%  C++
      2    0.1%    0.1%  GC
    114    4.9%          Shared libraries
    150    6.4%          Unaccounted
```
```
ticks parent  name
   2062   88.4%  LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
   2062  100.0%    LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
   2062  100.0%      LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
   2062  100.0%        LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
   2062  100.0%          LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
   2062  100.0%            LazyCompile: *fib /home/vagrant/workspace/fibonacci/app.js:3:13
```
`tickes`はイベントループをさす。

### アルゴリズムの改良
一度計算した結果を保存し、後からそれを読み取ることで、大幅に計算量を削減できる

### 連想配列
数字だけでなく、文字列も添字にして使うことができる。連想配列の添字をキー（key）と呼ぶ。

### Map
REPLで作成。干支の動物と対応する英単語を Map に保存。Map のオブジェクトを生成。
```bash
>var etoMap = new Map();
```
データの追加は、`set` メソッドで行い、第 1 引数にはキー、第 2 引数には値を入れる。
```bash
etoMap.set('子', 'mouse');
etoMap.set('丑', 'cow');
```
結果
```bash
Map { '子' => 'mouse', '丑' => 'cow' }
```
データの参照は、get メソッドで行う。
```bash
etoMap.get('丑');
etoMap.get('寅');
```
結果
```bash
'cow'
undefined
```

### アルゴリズム改良
```js
'use strict';
const memo = new Map();
memo.set(0,0); // 0番目に0を返す
memo.set(1,1); // 1番目に1を返す

function fib(n){
    if(memo.has(n)){
        return memo.get(n)
    }
    const value = fib(n-1)+fib(n-2);
    memo.set(n,value);
    return value;
}

const length = 100;
for(let i=0;i<=length;i++){
    console.log(i+"番目:"+fib(i));
}
```
コマンドラインで
```bash
time node app.js
```
を実行すると
```bash
real	0m0.060s
user	0m0.050s
sys	0m0.009s
```
と一瞬で実行できた。
```bash
node --prof app.js
node --prof-process isolate-0x3253810-v8.log
```
結果(抜粋)
```bash
 [Summary]:
   ticks  total  nonlib   name
      3    1.1%  100.0%  JavaScript
      0    0.0%    0.0%  C++
      1    0.4%   33.3%  GC
    276   98.9%          Shared libraries
```
```bash
ticks parent  name
     93   58.9%  /lib/x86_64-linux-gnu/libc-2.27.so
     29   31.2%    /home/vagrant/.nvm/versions/node/v10.14.2/bin/node
      3   10.3%      Script: ~bootstrapInternalLoaders internal/bootstrap/loaders.js:42:35
```


**線形（せんけい）オーダー**:n に対して n 倍処理時間がかかるオーダー。O記法でO(n)。




