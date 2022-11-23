let arr = [1, 3, 8, 12, 2, 9, 6];
let newArr = [];
let reverseNewArr = [];
let obj = {};

function create() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
            obj[arr[i]] = arr[i];
        }
    }
    newArr = Object.values(obj);

    for (let j = 0; j < newArr.length; j++) {
        reverseNewArr.unshift(newArr[j]);
    }
    return reverseNewArr;
}
console.log("Natija : " + create() + " Juftlar soni : " + newArr.length);