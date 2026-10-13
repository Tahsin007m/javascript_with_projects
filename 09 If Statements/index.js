// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else
const mytext = document.getElementById("mytext");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let age;

btn.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age >= 100)
    {
        result.textContent = `You are too old to enter this site!`;
    }
    else if(age == 0){
        result.textContent = `You can't enter. You were just born.`;
    }
    else if(age >= 18){
        result.textContent = `YYou can enter this site!`;
    }
    else if(age < 0){
        result.textContent = `Your age can't be negative!`;
    }
    else{
        result.textContent = `You must be 18+ to enter this site`;
    }
}

