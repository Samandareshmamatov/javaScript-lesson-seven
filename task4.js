let n = 5;
let a = 4;
let d = 2;
let arr = [a];

function create(param) {
    for (let i = 1; i < param; i++) {
        a *= d;
        arr[i] = a;
    }
    return arr;
}

console.log(create(n));