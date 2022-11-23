let arr = [1, 3, 8, 12, 15, 9, 5];
let newArr = [];
let obj = {};

function create() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            newArr.push(arr[i]);
            obj[arr[i]] = arr[i];
        }
    }
    newArr = Object.values(obj);

    return newArr;
}
console.log("Natija : " + create() + " Toqlar soni : " + newArr.length);