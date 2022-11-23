let arr = [1, 25, 53, 4, 12, 6];
let s = 0;
let x1 = 0;
let x2 = 0;

function big(param) {
    for (let i = 0; i < param.length; i++) {
        if (arr[i] + arr[i + 1] > s) {
            s = arr[i] + arr[i + 1];
            x1 = arr[i];
            x2 = arr[i + 1]
        }
    }
    return x1 + " " + x2
}
console.log(big(arr));