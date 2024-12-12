/** 9. reduce, Nested Arrays, and Spread Syntax
 * Write a function that takes a nested array of numbers (e.g., [[1, 2], [3, 4]]), flattens it into a single array using
 * reduce and the spread operator, and returns the sum of all numbers. */

function processArray(arr) {
    return arr
        .reduce((acc, cur) => [...acc, ...cur], [])
        .reduce((total, num) => total + num, 0);
}

const arr = [[1, 2], [3, 4], [5]];
console.log(processArray(arr)); // 15
