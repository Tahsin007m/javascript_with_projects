// string methods = allow you to manipulate and work with text (strings)

let username = "Sammy";

// charAt(index) -> returns the character at the given index (starts from 0)
username.charAt(0);
console.log(username.charAt(0)); // S

// indexOf(char) -> returns the index of the FIRST occurrence (-1 if not found)
username.indexOf('m');
console.log(username.indexOf('m')); // 2

// lastIndexOf(char) -> returns the index of the LAST occurrence (-1 if not found)
username.lastIndexOf('m');
console.log(username.lastIndexOf('m')); // 3

// length -> a property (not a method), so no parentheses; gives the number of characters
let t = username.length;
console.log(t); // 5

// trim() -> removes whitespace from both the start and end of a string
//username = username.trim();

// toLocaleLowerCase() -> converts the string to lowercase (respects locale rules)
username = username.toLocaleLowerCase();
console.log(username); // sammy

// toUpperCase() -> converts the string to uppercase
username = username.toUpperCase();
console.log(username); // SAMMY

// repeat(n) -> returns the string repeated n times
username = username.repeat(5);
console.log(username); // SAMMYSAMMYSAMMYSAMMYSAMMY

// startsWith(text) -> returns true if the string begins with the given text (case-sensitive)
username_st = username.startsWith('S');
console.log(username_st); // true

// endsWith(text) -> returns true if the string ends with the given text (case-sensitive)
// Note: the string is uppercase now, so 'y' (lowercase) gives false
username_end = username.endsWith('y');
console.log(username_end); // false

// includes(text) -> returns true if the string contains the given text (case-sensitive)
// Note: this overwrites username with a boolean, and 't' (lowercase) isn't in the uppercase string
username = username.includes('t');
console.log(username); // false

let phoneNum = "+880-19408-48080";

// replaceAll(search, replacement) -> replaces EVERY occurrence of search with replacement
phoneNum = phoneNum.replaceAll("-", "/");
console.log(phoneNum); // +880/19408/48080

// padStart(targetLength, padString) -> adds padString to the START until the string reaches targetLength
let orderId = "42";
orderId = orderId.padStart(5, "0");
console.log(orderId); // 00042

// padEnd(targetLength, padString) -> adds padString to the END until the string reaches targetLength
let label = "Name";
label = label.padEnd(10, ".");
console.log(label); // Name......