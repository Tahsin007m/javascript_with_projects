// COUNTER PROGRAM

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("countLabel");

let count = 0;

increase.onclick = function()
{
    count++;
    countlabel.textContent = count;
}

decrease.onclick = function()
{
    count--;
    countlabel.textContent = count;
}

reset.onclick = function()
{
    count = 0;
    countlabel.textContent = count;
}
