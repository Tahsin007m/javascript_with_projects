// setTimeout() = function in JS that allows you to schedule
//                the execution of a function after an amount of time
//                Times are approximate( varies based on the workload of the JS runtime env.)

//                setTimeout(callback, delay)
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers

/*function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 5000);

const timeoutId = sayHello();
clearTimeout(timeoutId);*/

function startTimer(){
    timeoutId = setTimeout(()=> window.alert("Hello"), 4000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}
