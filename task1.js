let n = 12;
let arr = [];

function create(param) {
    for (let i = 0; i < param; i++) {
        arr[i] = 2 * i + 1;
    }
    return arr;
}

console.log(create(n));