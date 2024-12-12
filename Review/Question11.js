/** 11. Recursive Functions, Default Parameters, and Error Handling
 * Write a recursive function to calculate the factorial of a number asynchronously. If the input is negative, reject
 * with an error. Use async/await to call the function, handle errors, and log the result or an error message. */

async function factorial(n) {
    if (n == 0) {
        return 1;
    }
    if (n < 0) {
        throw new RangeError(`${n} is an integer less than 0.`);
    }
    return n * (await factorial(n - 1));
}

// Test with a negative number, throws an error
try {
    const num = -2;
    const result = await factorial(num);
    console.log(`factorial(${num}) = ${result}`);
} catch (error) {
    console.error(error);
}

// Test with a positive number, logs the result
try {
    const num = 5;
    const result = await factorial(num);
    console.log(`factorial(${num}) = ${result}`);
} catch (error) {
    console.error(error);
}
