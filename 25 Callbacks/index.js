// callback =   A callback is a function you pass as an argument to another function, 
//              so that the other function can call it later, either right away or after 
//              something finishes (like a timer, a file read, or a network request).

//            used to handle asynchronous operation:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when your're done, call this next."

Hello(wait);

function Hello(callback){
    console.log(`Hello`);
    callback();
}

function wait(){
    console.log("Please wait");
}

function leave(){
    console.log("Leave");
}

function GoodBye(){
    console.log(`Good Bye`);
}

sum(displayconsole, 1, 2);

function sum(callbacks, x, y)
{
    let result = x + y;
    callbacks(result);
}

function displayconsole(resutlt)
{
    console.log(result);
}