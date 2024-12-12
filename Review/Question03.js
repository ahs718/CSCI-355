/** 3. Array Destructuring, Rest/Spread, and Higher-Order Functions
 * Write a function that takes an array of numbers, separates the first two elements (using destructuring),
 * and applies a higher-order function (like map) on the rest.
 * Return a new array with all elements doubled. */

function processArray(arr) {
    let [first, second, ...rest] = arr;
    first *= 2;
    second *= 2;
    return [first, second, ...rest.map(i => i * 2)];
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(processArray(arr)); // [2, 4, 6, 8, 10, 12]
