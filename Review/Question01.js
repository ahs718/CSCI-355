/** 1. Closures, IIFE, and Scoping
 * Write an IIFE (Immediately Invoked Function Expression) that creates a counter starting at 10.
 * The function should return an object with two methods:
 * increment (increases the counter by 1) and
 * reset (resets the counter to 10). */

let counter = (function counter() {
    let count = 10;

    return {
        increment() {
            count += 1;
        },
        reset() {
            count = 10;
        },
        get count() {
            return count;
        },
    };
})();

console.log(counter.count); // 10
counter.increment();
counter.increment();
console.log(counter.count); // 12
counter.reset();
console.log(counter.count); // 10
