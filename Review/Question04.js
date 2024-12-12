/** 4. Modules, Import/Export, and default vs Named Exports
 * Create a module that exports a default function to reverse a string and a named function to capitalize it.
 * Import and use both functions in another script to reverse and capitalize "hello". */

import reverseString, { capitalizeString } from "./StringOps.js";

let str = "hello";
console.log(reverseString(str)); // olleh
console.log(capitalizeString(str)); // HELLO
