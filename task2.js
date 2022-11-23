let n = 6;
let arr = [];

function create(param) {
    for (let i = 0; i < param; i++) {
        arr[i] = 2 ** i;
    }
    return arr;
}

console.log(create(n));