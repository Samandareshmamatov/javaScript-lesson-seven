let arr = [1, 3, 8, 12, 2, 9, 6];
let newArr = [];
let oddArr = [];
let reverseOddArr = [];
let obj = {};
let objOdd = {};

function create() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
            obj[arr[i]] = arr[i];
        }
        if (arr[i] % 2 == 1) {
            oddArr.push(arr[i]);
            objOdd[arr[i]] = arr[i];
        }
    }
    newArr = Object.values(obj);
    oddArr = Object.values(objOdd);

    for (let j = 0; j < oddArr.length; j++) {
        reverseOddArr.unshift(oddArr[j]);
    }
    return newArr + " " + reverseOddArr;
}
console.log("Natija : " + create());