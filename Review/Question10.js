/** 10. Regular Expressions, String Methods, and Conditional Logic
 * Write a function that takes a string containing a mix of words and numbers, extracts all the
 * numbers using a regular expression, and logs whether they are all even or not. */

function extractNumbers(str) {
    const numbers = str.match(/\d+/g).map(Number);
    const isEven = numbers.every(num => num % 2 === 0) ? "yes" : "no";
    console.log(`Numbers: ${numbers} Are all numbers even? ${isEven}`);
}

const str = "I have 5 dogs and 6 cats";
const str2 = "I have 4 cats and 8 dogs";

extractNumbers(str); // Numbers: 5,6 Are all numbers even? no
extractNumbers(str2); // Numbers: 4,8 Are all numbers even? yes
