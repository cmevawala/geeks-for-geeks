// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

function rotate(arr, n) {
    let tempArray = [];
    for (let i = 0; i < 2; i++) {
        tempArray.push(arr[i]);
    }

    for (let i = n; i < arr.length; i++) {
        arr[i - n] = arr[i];
    }

    return arr.concat(tempArray);
}
let result = rotate([1, 2, 3, 4], 2);
console.log(result);