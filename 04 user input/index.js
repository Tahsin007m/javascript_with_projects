// how to accept user input

// 1. Easy way =  window prompt
// 2. Professional way = HTML textbox

/*let username;

username = window.prompt("What's your username?");

console.log(username);*/

let username;


document.getElementById("submit").onclick = function(){
    username = document.getElementById("name").value;
    document.getElementById("head").textContent = `Hello ${username}!`;
}