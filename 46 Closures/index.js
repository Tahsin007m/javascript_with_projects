// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks

function outer(){

    let message = "hello";
    function inner(){
        console.log(message);
    }

    inner();
}

outer();

function counter(){

    let count = 0;
    
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};
}

const count = counter();

count.increment();