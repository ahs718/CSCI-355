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
    
    console.log(counter.count); // 10
    counter.increment();
    counter.increment();
    console.log(counter.count); // 12
    counter.reset();
    console.log(counter.count); // 10
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
    
    const data = await fetchData();
    console.log(data[0]);
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
    
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(processArray(arr)); // [2, 4, 6, 8, 10, 12]
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
    console.log(reverseString(str)); // olleh
    console.log(capitalizeString(str)); // HELLO
    ```

5.   **Set, WeakSet, and Iterators**

    Create a base class Vehicle with a method move() that logs "Vehicle is moving". Extend it with a class Car that overrides move() to log "Car is driving". Add another class ElectricCar that overrides move() to log "Electric car is driving silently".

    Demonstrate polymorphism by calling the move() method on instances of each class using a loop over an array of objects.

    ```js
    class Vehicle {
        move() {
            console.log("Vehicle is moving");
        }
    }
    
    class Car extends Vehicle {
        move() {
            console.log("Car is driving");
        }
    }
    
    class ElectricCar {
        move() {
            console.log("Electric car is driving silently");
        }
    }
    
    let vehicles = [new Vehicle(), new Car(), new ElectricCar()];
    
    for (let vehicle of vehicles) {
        vehicle.move();
    }
    ```

6.   **Promise.all, fetch, and Error Propagation**

    Write a function that fetches data from three mock URLs (use Promise.resolve to simulate). Use Promise.all to handle the requests simultaneously and log "One of the requests failed" if any of them fail.

    ```js
    function fetchData() {
        // Simulate fetch with Promise.resolve and Promise.reject
        const requests = [
            Promise.resolve("Data from URL 1"),
            Promise.resolve("Data from URL 2"),
            Promise.reject("Failed to fetch data from URL 3"),
        ];
    
        // Using Promise.all to handle all requests
        Promise.all(requests)
            .then(responses => {
                console.log("All requests succeeded");
            })
            .catch(error => {
                console.log("One of the requests failed");
            });
    }
    
    fetchData(); // One of the requests failed
    ```

7.   **Currying, Arrow Functions, and Default Parameters**

    Write a curried function that takes three arguments: a number, a multiplier, and an optional increment (defaulting to 1). Multiply the number by the multiplier and then add the increment.

    ```js
    const multiplyAndIncrement =
        (increment = 1) =>
        (number, multiplier) =>
            number * multiplier + increment;
    
    const multiplyAndIncrement1 = multiplyAndIncrement();
    const multiplyAndIncrement4 = multiplyAndIncrement(4);
    
    console.log(multiplyAndIncrement1(5, 2)); // 5 * 2 + 1 = 11
    console.log(multiplyAndIncrement4(5, 2)); // 5 * 2 + 4 = 14
    ```

8.   **Class Syntax, Inheritance, and Static Methods**

    Create a base class Shape with a static method describe that logs "I am a shape". Extend it with a Rectangle class that adds width and height properties and calculates the area. Demonstrate usage of the static method and area calculation.

    ```js
    class Shape {
        static describe() {
            console.log("I am a shape");
        }
    }
    
    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
    
        get area() {
            return this.width * this.height;
        }
    }
    
    const rectangle = new Rectangle(5, 2);
    console.log(rectangle.area); // 10
    
    Rectangle.describe(); // I am a shape
    Shape.describe(); // I am a shape
    ```

9.   **reduce, Nested Arrays, and Spread Syntax**

    Write a function that takes a nested array of numbers (e.g., [[1, 2], [3, 4]]), flattens it into a single array using reduce and the spread operator, and returns the sum of all numbers.

    ```js
    function processArray(arr) {
        return arr
            .reduce((acc, cur) => [...acc, ...cur], [])
            .reduce((total, num) => total + num, 0);
    }
    
    const arr = [[1, 2], [3, 4], [5]];
    console.log(processArray(arr)); // 15
    ```

10.   **Regular Expressions, String Methods, and Conditional Logic**

    Write a function that takes a string containing a mix of words and numbers, extracts all the numbers using a regular expression, and logs whether they are all even or not.

    ```js
    function extractNumbers(str) {
        const numbers = str.match(/\d+/g).map(Number);
        const isEven = numbers.every(num => num % 2 === 0) ? "yes" : "no";
        console.log(`Numbers: ${numbers} Are all numbers even? ${isEven}`);
    }
    
    const str = "I have 5 dogs and 6 cats";
    const str2 = "I have 4 cats and 8 dogs";
    
    extractNumbers(str); // Numbers: 5,6 Are all numbers even? no
    extractNumbers(str2); // Numbers: 4,8 Are all numbers even? yes
    ```

11.   **Recursive Functions, Default Parameters, and Error Handling**

     Write a recursive function to calculate the factorial of a number asynchronously. If the input is negative, reject with an error. Use async/await to call the function, handle errors, and log the result or an error message.

     ```js
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
     ```

     