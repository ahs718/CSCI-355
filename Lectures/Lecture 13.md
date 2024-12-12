# 12/10/24 Lecture 13

# Review

## Functions

### Defining Functions

-   The most straightforward way to define a JavaScript function is with the function keyword, which can be used as a declaration or as an expression.
-   ES6 defines an important new way to define functions without the function keyword: "arrow functions" have a particularly compact syntax and are useful when passing one function as an argument to another function.

#### Function Declarations

Function declarations consist of the function keyword, followed by these
components:

-   An identifier that names the function. The name is a required part of function declarations: it is used as the name of a variable, and the newly defined function object is assigned to the variable.
-   A pair of parentheses around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function, and they behave like local variables within the body of the function.
-   A pair of curly braces with zero or more JavaScript statements inside. These statements are the body of the function: they are executed whenever the function is invoked.

```js
// Print the name and value of each property of o. Return undefined.
function printprops(o) {
	for(let p in o) {
		console.log(`${p}: ${o[p]}\n`);
	}
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
	let dx = x2 - x1;
	let dy = y2 - y1;
	return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x-1);
}
```

#### Function Expressions

Function expressions look a lot like function declarations, but they appear within the

context of a larger expression or statement, and the name is optional.

```js
// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));
```

-   A function declaration actually declares a variable and assigns a function object to it.
-   A function expression, on the other hand, does not declare a variable
-   it is up to you to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times. 

#### Arrow Functions

-   In ES6, you can define functions using a particularly compact syntax known as
    "arrow functions".

-   This syntax is reminiscent of mathematical notation and uses an => “arrow” to separate the function parameters from the function body.

-   The function keyword is not used, and, since arrow functions are expressions instead of statements, there is no need for a function name, either.

-   The general form of an arrow function is a comma-separated list of parameters in parentheses, followed by the => arrow, followed by the function body in curly braces.

    ```js
    const sum = (x, y) => { return x + y; };
    ```

-   But arrow functions support an even more compact syntax.

-   If the body of the function is a single return statement, you can omit the return keyword, the semicolon that goes with it, and the curly braces, and write the body of the function as the expression whose value is to be returned

    ```js
    const sum = (x, y) => x + y;
    ```

-   Furthermore, if an arrow function has exactly one parameter, you can omit the
    parentheses around the parameter list

    ```js
    const polynomial = x => x*x + 2*x + 3;
    ```

-   Note, however, that an arrow function with no arguments at all must be written with an empty pair of parentheses:

    ```js
    const constantFunc = () => 42;
    ```

#### Nested Functions

In JavaScript, functions may be nested within other functions.

```js
function hypotenuse(a, b) {
	function square(x) { return x*x; }
	return Math.sqrt(square(a) + square(b));
}
```

-   The interesting thing about nested functions is their variable scoping rules: they can access the parameters and variables of the function (or functions) they are nested within.
-   In the code above, for example, the inner function square() can read and write the parameters a and b defined by the outer function hypotenuse().

### Invoking Functions

The JavaScript code that makes up the body of a function is not executed when the
function is defined, but rather when it is invoked. JavaScript functions can be invoked
in five ways:

1.   As functions
2.   As methods
3.   As constructors
4.   Indirectly through their call() and apply() methods
5.   Implicitly, via JavaScript language features that do not appear like normal function invocations

Regular function invocation expressions:

```js
printprops({x: 1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
let probability = factorial(5)/factorial(13);
```

#### Method Invocation

-   A method is nothing more than a JavaScript function that is stored in a property of an object.

-   If you have a function f and an object o, you can define a method named m of
    o with the following line:

    ```js
    o.m = f;
    ```

-   Having defined the method m() of the object o, invoke it like this:

    ```js
    o.m();
    ```

-   Or, if m() expects two arguments, you might invoke it like this:

    ```js
    o.m(x, y);
    ```
