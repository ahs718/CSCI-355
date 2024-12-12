# 12/12/24 Lecture 14

## Final material

-   HTML, CSS, JS, Node.js
-   OSI Model
-   React, Typescript, etc.
-   Algorithms (such Huffman encoding, LZW, Dijkstra, etc.)
-   Slides:
    -   Securty, Conklin 1-6
    -   JS, Web Warriors 1-6
    -   JS, Murach (relevant material)
    -   Networking, 2-7

## Coding Questions for Final

1.   **Closures, IIFE, and Scoping**

    Write an IIFE (Immediately Invoked Function Expression) that creates a counter starting at 10. The function should return an object with two methods: increment (increases the counter by 1) and reset (resets the counter to 10). Demonstrate usage.

    ```js
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
    ```

2.   **async/await, Error Handling, and Default Parameters**

    Write an async function that fetches JSON data from a URL (mocked with Promise.resolve). If no URL is provided, use a default URL. Handle errors by logging "Failed to fetch data" and returning an empty object.

    ```js
    async function fetchData(url = "https://jsonplaceholder.typicode.com/posts") {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch data");
            return {};
        }
    }
    ```

3.   **Array Destructuring, Rest/Spread, and Higher-Order Functions**

    Write a function that takes an array of numbers, separates the first two elements (using destructuring), and applies a higher-order function (like map) on the rest. Return a new array with all elements doubled.

    ```js
    function processArray(arr) {
        let [first, second, ...rest] = arr;
        first *= 2;
        second *= 2;
        return [first, second, ...rest.map(i => i * 2)];
    }
    ```

4.   **Modules, Import/Export, and default vs Named Exports**

    Create a module that exports a default function to reverse a string and a named function to capitalize it. Import and use both functions in another script to reverse and capitalize "hello".

    ```js
    // StringOps.js
    
    export default function reverseString(str) {
        return str.split("").reverse().join("");
    }
    
    export function capitalizeString(str) {
        return str.toUpperCase();
    }
    ```

    ```js
    // Question04.js
    
    import reverseString, { capitalizeString } from "./StringOps.js";
    
    let str = "hello";
    console.log(reverseString(str));
    console.log(capitalizeString(str));
    ```

5.   **Set, WeakSet, and Iterators**

    Create a base class Vehicle with a method move() that logs "Vehicle is moving". Extend it with a class Car that overrides move() to log "Car is driving". Add another class ElectricCar that overrides move() to log "Electric car is driving silently".

    Demonstrate polymorphism by calling the move() method on instances of each class using a loop over an array of objects.

6.   **Promise.all, fetch, and Error Propagation**

    Write a function that fetches data from three mock URLs (use Promise.resolve to simulate). Use Promise.all to handle the requests simultaneously and log "One of the requests failed" if any of them fail.

7.   **Currying, Arrow Functions, and Default Parameters**

    Write a curried function that takes three arguments: a number, a multiplier, and an optional increment (defaulting to 1). Multiply the number by the multiplier and then add the increment.

8.   **Class Syntax, Inheritance, and Static Methods**

    Create a base class Shape with a static method describe that logs "I am a shape". Extend it with a Rectangle class that adds width and height properties and calculates the area. Demonstrate usage of the static method and area calculation.

9.   **reduce, Nested Arrays, and Spread Syntax**

    Write a function that takes a nested array of numbers (e.g., [[1, 2], [3, 4]]), flattens it into a single array using reduce and the spread operator, and returns the sum of all numbers.

10.   **Regular Expressions, String Methods, and Conditional Logic**

    Write a function that takes a string containing a mix of words and numbers, extracts all the numbers using a regular expression, and logs whether they are all even or not.

11.   **Recursive Functions, Default Parameters, and Error Handling**

     Write a recursive function to calculate the factorial of a number asynchronously. If the input is negative, reject with an error. Use async/await to call the function, handle errors, and log the result or an error message.