/** 7. Currying, Arrow Functions, and Default Parameters
 * Write a curried function that takes three arguments: a number, a multiplier, and an optional increment (defaulting to 1).
 * Multiply the number by the multiplier and then add the increment. */

const multiplyAndIncrement =
    (increment = 1) =>
    (number, multiplier) =>
        number * multiplier + increment;

const multiplyAndIncrement1 = multiplyAndIncrement();
const multiplyAndIncrement4 = multiplyAndIncrement(4);

console.log(multiplyAndIncrement1(5, 2)); // 5 * 2 + 1 = 11
console.log(multiplyAndIncrement4(5, 2)); // 5 * 2 + 4 = 14
