// counter program

const decrease = document.getElementById("dec_btn");
const reset = document.getElementById("ret_btn");
const increase = document.getElementById("inc_btn");
const countLabel = document.getElementById("count_label");

let count = 0;

increase.onclick = function()
{
    count++;
    countLabel.textContent = count;
}

decrease.onclick = function()
{
    count--;
    countLabel.textContent = count;
}

reset.onclick = function()
{
    count = 0;
    countLabel.textContent = count;
}