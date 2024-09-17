# 9/17/24 Lecture 6

**Test 1: 9/26/24**

### Primitive datatypes

-   Number (64-bit binary)
-   String
-   Boolean
-   undefined
-   Symbol (not discussed)
-   BigInt (not discussed)

#### Number

-   There are no ints in JavaScript. All numbers are 64-bit floating point numbers, this means you need to be careful when working with decimal numbers.

    ```js
    console.log(0.2 + 0.1); // 0.30000000000000004
    ```

-   Whole numbers safe within the range of ±2^53^−1.

#### Strings

-   Single Quotes and Double Quotes can be used interchangeably. 

-   Template strings to evaluate expressions can be added using Backticks

    ```js
    let x = "Normal";
    let y = 'Normal';
    let z = `Template ${1 + 1} ${x.length}`;	
    
    console.log(x); // Normal
    console.log(y); // Normal
    console.log(z); // Template 2 6
    ```

### Objects

-   JavaScript contains non-data structural types that wrap primitives to form complex objects.

-   The Object is the most basic of these structural types, all other objects are derived from this.

-   An object is a dictionary styled list of comma separated key : value pairs. Each pair is separated with a colon.

-   Objects are denoted by a set curly braces.

    ```js
    const object_01 = {};		
    console.log(object_01); // empty object
    
    const object_02 = {a:3, b:"ABC"};
    console.log(object_02); // object with key "a" and value 3 and key "b" with value "ABC"
    
    console.log(object_02.a); // Object Access
    ```

-   You cannot use the dot operator with a variable, as it is automatically treated as a string.

-   You can conditionally access properties with `?.`

    ```js
    book.contents?.ch01?.sect1
    ```

### const

-   const is short for a constant, they cannot be set to a new value.  They must be initialized at declaration.

    ```js
    const object_08 = {a:"b"};
    object_08 = {a:"c"}; //TypeError: invalid assignment to const
    ```

-   Regarding objects this does not mean the internals cannot be changed

    ```js
    const object_09 = {a:"b"};
    object_09.a = "c";
    console.log(object_09); //{ a: "c" }
    ```

### Destructuring Assignment

-   The destructuring assignment allows the creation of multiple variables using the properties of an existing object

    ```js
    let object_11 = {a:1, b:2, c:3};
    let {a, c} = object_11;
    console.log(a); // 1
    console.log(c); // 3
    ```

### Property value shorthand

-   If you have a variable and you want to create an object with that variable and are fine using the same property name, a shorthand allows you to omit the colon and duplicate key value definitions. This doesn't work if you need to rename the property.

    ```js
    let object_12 = {a:1, b:2, c:3};
    let {a,c} = object_12;
    
    let object_13 = {a:a, c:c, d:1}; // {a:1, c:3, d:1}
    let object_14 = {a, c, d:1}; // Equivalent
    
    let object_15 = {a, c2:c, d:1}; // {a:1, c2:3, d:1}
    ```

### Function

-   In JavaScript, functions are objects

    ```js
    function function_01(a, b){
        return a + b;
    }
    console.log(function_01);
    
    /*
    function_01(a, b)
        arguments: null
        caller: null
        length: 2
        name: "function_01"
        prototype: Object { … }
        <prototype>: function ()
    */
    ```

-   We can define functions in (at least 2 ways)

#### Function Declaration

-   A function declaration will be "hoisted" to the top of it's scope

    ```js
    console.log(function_02(1,2)); // 3
    function function_02(a, b){
        return a + b;
    }
    ```

#### Function Expression

-   In contrast a function expression can only be used after it is defined

    ```js
    console.log(function_03(1,2));
    const function_03 = function adds_two_numbers(a, b){
        return a + b;
    };
    
    // ReferenceError: can't access lexical declaration 'function_03' before initialization
    ```

#### Function Constructor [reference]

-   Using the function constructor is more academic and not really used in practice, especially since it uses an evil `eval()` command under the hood, which prevents it from being run in browsers.

    ```js
    const function_04 = new Function("a", "b", "return a + b");
    console.log(function_04(1,2)); //3
    ```

    Should work in Node.js, but most browsers will block it.

#### Function names

-   When using a function expression the function name is not used, instead the variable name (`functon_05` in this example) is the only way to refer to the function, it is generally good practice to include a function name to describe it, but it is not required.

    ```js
    const function_05 = function adds_two_numbers(a, b){
        return a + b;
    };
    ```

#### Anonymous Functions

-   An anonymous function is a function without a name

    ```js
    const function_06 = function(a, b){
        return a + b;
    };
    ```

-   These can be used when passing functions to higher-order functions. As an example, the Array's map method takes a function as it's argument and applies that function to every element in the array.

    ```js
    let input  = [1,2,3,4,5,6,7,8,9];
    let output = input.map( function(x) {return x * x} );
    console.log(output); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
    ```

-   Here we pass in an anonymous function  `function(x) {return x * x}`
-   This is typically done if we don't plan on needing this function again.

#### Arrow Function

-   There is a shorthand syntax for defining functions. This concise syn‐ tax uses => to separate the argument list from the function body, so functions defined this way are known as *arrow functions*. Arrow functions are most commonly used when you want to pass an unnamed function as an argument to another function.

    ```js
    const plus1 = x => x + 1; // The input x maps to the output x + 1
    const square = x => x * x; // The input x maps to the output x * x
    ```

### Arrays

-   Arrays are collections of data, you can mix types inside your array.

    ```js
    let array_01 = [1, "Two", {three:"value"}, function(){ return 4} ];
    console.log(array_01);
    
    /*
    […]
        0: 1
        1: "Two"
        2: Object { three: "value" }
        3: array_01()
    */
    ```

-   Arrays have a `Array.length` property and several methods (like `Array.map`),

#### Appending

```js
let array_02 = [1, 2, 3, 4, 5];
array_02.push(6); // Mutable, changes array_02
console.log(array_02);
```

#### Search

```js
["A", "B", "C", "D", "E"].indexOf("E"); // 4
```

-   If no match is found `-1` is returned

#### Removal

```js
let array_03 = [10, 6, 7, 9, 8];
let index = 2;
let deleteCount = 1
array_03.splice(index , deleteCount); // Mutable, changes array_03
console.log(array_03);

let array_04 = [10, 6, 7, 9, 8];
let filtered = array_04.filter( function(x){ return x % 2 == 0} );
// immutable, does not change array_04
console.log(filtered);
console.log(array_04);
```

-   Filter takes a function as it's argument and applies that function to each element in the array, all the values that return a true are returned in a new array.  The original array is unchanged.

#### Spread Operator

-   Arrays have a special operator called the spread operator that effectively removes the braces from an array so that it can be used in functions that take a comma separated list of numbers

    ```js
    let array_02 = [1,2,3,4,5,6,7,8,9];
    
    console.log(Math.max(1,9,3,7,6,2,4,8)); // 9
    console.log(Math.max(array_02)); // NaN
    ```

-   `Math.max()`  expects a comma separated list of numbers

    ```js
    let array_03 = [1,2,3,4,5,6,7,8,9];
    console.log(Math.max(...array_03)); // 9
    ```

#### Rest Operator

-   Rest operator is similar, it's usage is inside functions parameters however, the argument becomes an array when used like this.

    ```js
    function my_max(...numbers){ // numbers is an array in this function
        let max_candidate = numbers[0];
        for(let i=1; i< numbers.length; i++){
            if(numbers[i] > max_candidate){
                max_candidate = numbers[i];
            }
        }
        return max_candidate;
    }
    console.log(my_max(1,9,3,7,6,2,4,8));
    console.log(my_max(1,2,3));
    console.log(my_max(...[1,9,3,7,6]));
    ```

-   It's called rest because you can access the rest of the argument list with it, in this scenario the first two variables are removed and the rest are accessed in the array `rest`.  This can possibly be an empty array.

    ```js
    
    function grade(first, second, ...rest){
        let total = 0;
        total += first * 0.4;
        total += second * 0.6;
        
        let sum_of_rest = 0;
        for(let i=0 ; i < rest.length ; i++){
            sum_of_rest += rest[i];
        }
        total += sum_of_rest * 0.01
        return total;
    }
    
    console.log(grade(50, 100, 0, 50, 50)); //rest is [0,50,50]
    console.log(grade(0, 0, 100, 100, 100, 100, 100));
    //rest is [100,100,100,100,100]
    console.log(grade(100, 100)); //rest is []
    ```

### undefined vs null

-   There is a "7th" primitive that you may encounter called `null`

-   `undefined` is used in the case where a value has not been set yet, it does not convey any information.

-   `null` is used in the case where a value has been explicitly set, but the value represents a null, empty,  or non-existent reference.

    ```js
    let supervisor1 = "None" // I have a supervisor named "None"
    let supervisor2 = null; // I do NOT have a supervisor
    let supervisor3; // supervisor is in an uninitialized state (undefined)
    ```

### Declaring variables

-   **In JavaScript there are 4 ways to declare a variables types:**

    -   Using `let` defines a block scoped variable

    -   Using `const` defines a block scoped constant

    -   Using `var` defines a function scoped variable

    -   Using no keyword defines a global scoped variable 

-   Block scoped means that a variable can only be accessed within the set of curly braces in which it was defined. In addition `let` and `const` only allow variables to be accessed after they've been defined.  You will get an error if you try to access it while in this "temporal dead zone".

-   When a variable is declared with `var`, if it is used inside a function, the variable is locally scoped, otherwise it becomes a global. In addition it ignores the temporal dead zone rule, instead initializing all variables to undefined.

-   There are some special edge cases where `var` can be helpful, but even I rarely encounter them. As for global's you should always avoid them. For this course, use of `let` and `const` is recommended, recommend avoiding `var` usage.

### Classes

```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    distance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
```

-   Constructors are defined with function name `constructor`