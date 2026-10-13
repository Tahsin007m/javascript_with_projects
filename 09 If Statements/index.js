// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

const mytext = document.getElementById("mytext");
const submit = document.getElementById("submit"); // unused: the button's id is "btn", so this is null
const result = document.getElementById("result");

let age;

btn.onclick = function(){

    // Input values are strings, so convert to a number
    age = Number(mytext.value);

    // Conditions are checked top to bottom; the first true one runs
    if(age >= 100)
    {
        result.textContent = `You are too old to enter this site!`;
    }
    else if(age == 0){
        result.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18){
        result.textContent = `YYou can enter this site!`; // typo: "YYou"
    }
    else if(age < 0){
        result.textContent = `Your age can't be negative!`;
    }
    else{
        // Ages 1-17, or non-numeric input (NaN)
    result.textContent = `You must be 18+ to enter this site`;
    }
}