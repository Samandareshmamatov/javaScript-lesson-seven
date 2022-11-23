let n = 8;
let arr = [1, 1];

function create(param) {
    for (let i = 2; i < param; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(create(n));