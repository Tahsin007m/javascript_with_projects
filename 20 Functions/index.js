// function = A section of reusable code
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

//  function happyBirthday(name, age){
//      console.log(`Happy Birthday to you!`);
//      console.log(`Happy Birthday to you!`);
//      console.log(`Happy Birthday dear ${name}!`);
//      console.log(`Happy Birthday to you!`);
//      console.log(`You are ${age} years old`);
//  }

//  happyBirthday("Tahsin", 23);
//  console.log(`\n`);
//  happyBirthday("Gogeta", 45);
//  console.log(`\n`);
//  happyBirthday("Vegetto", 47);

function add(x, y){
    let result = x + y;
    return result;
}

function substract(x, y){
    let result = x - y;
    return result;
}

function multiply(x, y){
    let result = x * y;
    return result;
}

function divide(x, y){
    let result = x / y;
    if(y<=0){
        console.log(`Denominator cant be zero!`);
    }
    else{
        return result;
    }
}

function isEven(number)
{
    return number%2==0 ? true:false;
}

function isValidEmail(email)
{
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

let ans1 = add(5, 3);
let ans2 = substract(5, 3);
let ans3 = multiply(5, 3);
let ans4 = divide(5, 3);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);

let result1 = isEven(88);
console.log(result1);

let valid = isValidEmail("Tahsin@gmail.com");
console.log(valid);




