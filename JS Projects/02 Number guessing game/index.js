// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.ceil(Math.random() * (maxNum - minNum) + 1);

let attempts = 0;
let guess;
let running = true;

while(running)
{
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}: `);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess >maxNum){
        window.alert("Your number is out of range");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! Try Again!")
        }
        else if(guess > answer){
            window.alert("Too High! Try Again!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }

}
