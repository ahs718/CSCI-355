# 9/24/24 Lecture 8

-   No class on October 3, 17, 24.

### Feedback on Quiz

-   If you set something as a `const`, it makes the reference not able to change. The content inside the reference, however, can be changed.
-   Additionally, a `const` in a for loop can work without errors because each iteration, a new const is initialized, the old const is not being reassigned.

## Expressions and Operators

The simplest expressions, known as primary expressions, are those that stand alone they do not include any simpler expressions. Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references. Literals are constant values that are embedded directly in your program. They look like these:

```js
1.23 // A number literal
"hello" // A string literal
/pattern/ // A regular expression literal
```

Some of JavaScript’s reserved words are primary expressions:

```js
true	// Evalutes to the boolean true value
false	// Evaluates to the boolean false value
null	// Evaluates to the null value
this	// Evaluates to the "current" object
```

```js
let a;
console.log(a);			// Output: undefined
console.log(typeof a)	// Output: "undefined"

let b = null;
console.log(b);			// Output: null
console.log(typeof b)	// Output: "object"
```

### Function Definition Expressions

A function definition expression defines a JavaScript function, and the value of such an expression is the newly defined function. In a sense, a function definition expression is a "function literal" in the same way that an object initializer is an "object literal."

```js
// This function returns the square of the value passed to it.
let square = function(x) { return x * x; };
```

### Property Access Expressions

A property access expression evaluates to the value of an object property or an array element. JavaScript defines two syntaxes for property access:

```js
expression . identifier
expression [ expression ]
```

```js
let o = {x: 1, y: {z: 3}};	// An example object
let a = [o, 4, [5, 6]];		// An example array that contains the object
o.x 						// => 1: property x of expression o
o.y.z 						// => 3: property z of expression o.y
o["x"] 						// => 1: property x of object o
a[1] 						// => 4: element at index 1 of expression a
a[2]["1"] 					// => 6: element at index 1 of expression a[2]
a[0].x 						// => 1: property x of expression a[0]
```

####  Conditional Property Access

In JavaScript, the values null and undefined are the only two values that do not have properties. In a regular property access expression using . or [], you get a TypeError if the expression on the left evaluates to null or undefined. You can use ?. and ?.[] syntax to guard against errors of this type.

```js
expression ?. identifier
expression ?.[ expression ]
```

#### Invocation Expressions

An invocation expression is JavaScript’s syntax for calling (or executing) a function or method. It starts with a function expression that identifies the function to be called. The function expression is followed by an open parenthesis, a comma-separated list of zero or more argument expressions, and a close parenthesis. Some examples:

```js
f(0)			// f is the function expression; 0 is the argument expression.
Math.max(x,y,z)	// Math.max is the function; x, y, and z are the arguments.
a.sort()		// a.sort is the function; there are no arguments.
```

#### Conditional Invocation

You can also invoke a function using ?.() instead of (). Normally when you invoke a function, if the expression to the left of the parentheses is null or undefined or any other non-function, a TypeError is thrown. With the new ?.() invocation syntax, if the expression to the left of the ?. evaluates to null or undefined, then the entire invocation expression evaluates to undefined and no exception is thrown.

```js
function square(x, log) {	// The second argument is an optional function
	log?.(x);				// Call the function if there is one
	return x * x;			// Return the square of the argument
}
```

Note, however, that ?.() only checks whether the lefthand side is null or undefined. It does not verify that the value is actually a function.

Conditional invocation expressions with ?.() work just as well for methods as they do for functions. But because method invocation also involves property access, it is worth taking a moment to be sure you understand the differences between the following expressions:

```js
o.m()	// Regular property access, regular invocation
o?.m()	// Conditional property access, regular invocation
o.m?.()	// Regular property access, conditional invocation
```

### Arithmetic Expressions

#### The \*\* Operator

The \*\* operator has higher precedence than \* , /, and % (which in turn have higher precedence than + and -). Unlike the other operators, \*\* works right-to-left, so 2\*\*2\*\*3 is the same as 2\*\*8, not 4\*\*3.

#### The + Operator

```js
1 + 2			// => 3: addition
"1" + "2" 		// => "12": concatenation
"1" + 2 		// => "12": concatenation after number-to-string
1 + {} 			// => "1[object Object]": concatenation after object-to-string
true + true		// => 2: addition after boolean-to-number
2 + null 		// => 2: addition after null converts to 0
2 + undefined	// => NaN: addition after undefined converts to NaN
```

### Relational Expressions

-   **Strict equality**
    -   The strict equality operator === evaluates its operands, then compares the two values with no type conversion.

- **Equality with type conversion**
    -   The equality operator == is like the strict equality operator, but it is less strict. If the values of the two operands are not the same type, it attempts some type conversions and tries the comparison again.

### The in Operator

The in operator expects a left-side operand that is a string, symbol, or value that can be converted to a string. It expects a right-side operand that is an object. It evaluates to true if the left-side value is the name of a property of the right-side object

```js
let point = {x: 1, y: 1};	// Define an object
"x" in point 				// => true: object has property named "x"
"z" in point 				// => false: object has no "z" property.
"toString" in point 		// => true: object inherits toString method
let data = [7,8,9]; 		// An array with elements (indices) 0, 1, and 2
"0" in data 				// => true: array has an element "0"
1 in data 					// => true: numbers are converted to strings
3 in data 					// => false: no element 3
```

### The instanceOf Operator

The instanceof operator expects a left-side operand that is an object and a right-side operand that identifies a class of objects. The operator evaluates to true if the left-side object is an instance of the right-side class and evaluates to false otherwise.

### First-Defined (??)

The first-defined operator ?? evaluates to its first defined operand: if its left operand is not null and not undefined, it returns that value. Otherwise, it returns the value of the right operand. Like the && and || operators, ?? is short-circuiting: it only evaluates its second operand if the first operand evaluates to null or undefined. If the expression a has no side effects, then the expression a ?? b is equivalent to:

```js
(a !== null && a !== undefined) ? a : b
```

```js
// If maxWidth is defined, use that. Otherwise, look for a value in the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;
```

### The delete Operator

`delete` is a unary operator that attempts to delete the object property or array element specified as its operand. Like the assignment, increment, and decrement operators, `delete` is typically used for its property deletion side effect and not for the value it returns.

### The void Operator

`void` is a unary operator that appears before its single operand, which may be of anytype. This operator is unusual and infrequently used; it evaluates its operand, then discards the value and returns undefined. Since the operand value is discarded, using the `void` operator makes sense only if the operand has side effects.

## Statements

The JavaScript interpreter takes no action when it executes an empty statement. The empty statement is occasionally useful when you want to create a loop that has an empty body. Consider the following for loop:

```js
// Initialize an array a
for(let i = 0; i < a.length; a[i++] = 0) ;
```

### Loops

-   **While**

    ```js
    let count = 0;
    while (count < 10) {
        console.log(count);
        count++;
    }
    ```

-   **Do/while**

    ```js
    let len = a.length, i = 0;
    if (len === 0) {
    	console.log("Empty Array");
    } else {
    	do {
    		console.log(a[i]);
    	} while(++i < len);
    }
    ```

-   **For**

    ```js
    for(let count = 0; count < 10; count++) {
    	console.log(count);
    }
    ```

-   **For/of**

    ```js
    // With arrays
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
    for(let element of data) {
    	sum += element;
    }
    sum // => 45
    
    // With objects
    let o = { x: 1, y: 2, z: 3 };
    let keys = "";
    for(let k of Object.keys(o)) {
    	keys += k;
    }
    keys // => "xyz"
    
    // With strings
    let frequency = {};
    for(let letter of "mississippi") {
    	if (frequency[letter]) {
    		frequency[letter]++;
    	} else {
    		frequency[letter] = 1;
    	}
    }
    frequency // => {m: 1, i: 4, s: 4, p: 2}
    
    // With Map
    let m = new Map([[1, "one"]]);
    for(let [key, value] of m) {
    	key // => 1
    	value // => "one"
    }
    ```

-   **For/in**

    ```js
    for(let p in o) {		// Assign property names of o to variable p
    	console.log(o[p]);	// Print the value of each property
    }
    ```

## Manipulating the DOM with JavaScript

You can modify an HTML element using JavaScript

```html
<script>
    let element = document.getElementById("my-element");
    element.innerHTML = "<p>Inner HTML</>";
</script>
```

