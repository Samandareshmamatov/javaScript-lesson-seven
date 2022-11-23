let arr = [1, 3, 8, 12, 5, 7];
let newArr = [];

function create() {
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
}
console.log(create());