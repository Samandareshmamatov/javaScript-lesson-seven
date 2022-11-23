let n = 8;
let a = 5;
let d = 3;
let arr = [a];

function create(param) {
    for (let i = 1; i < param; i++) {
        a += d;
        arr[i] = a;
    }
    return arr;
}

console.log(create(n));