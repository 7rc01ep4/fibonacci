'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n -2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(`${(i)}番目のフィボナッチ数列は${fib(i)}です`)
}

// console.log(`$(prosess.argv[2])番目のフィボナッチ数列は${fib(prosess.srgv[2])}です`)