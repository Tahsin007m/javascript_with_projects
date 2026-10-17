// string methods = allow you to manipulate and work with text(strings)

let username  = "Sammy";

username.charAt(0);
console.log(username.charAt(0));

username.indexOf('m');
console.log(username.indexOf('m'));

username.lastIndexOf('m');
console.log(username.lastIndexOf('m'));

//let t = username.length();
//console.log(t);

//username = username.trim(); 

username = username.toLocaleLowerCase();
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.repeat(5);
console.log(username);