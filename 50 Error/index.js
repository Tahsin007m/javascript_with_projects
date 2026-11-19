// Error = An object that is created to represent a problem that occurs
//         Occurs often with user input


// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

/*try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTIONS
    // SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes")
}

console.log("You have reached the end!");*/

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("Divisor cant be zero");
    }
    if(isNaN(dividend || isNaN(divisor)))
    {
        throw new Error("Please enter numbers");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("End of code");