// Method Chaining = Calling one method after another
//                   is one continous line of code.

//   ------- NO METHOD CHAINING -------

let username = window.prompt("Enter your username: ");

username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachar = username.slice(1);
extrachar = extrachar.toLowerCase();

username = letter + extrachar;

console.log(username);

// --------- METHOD CHAINING --------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
