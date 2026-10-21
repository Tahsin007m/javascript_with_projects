
const textBox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsuis = document.getElementById("tocelsuis");
const result = document.getElementById("result");

let temp;

function convert()
{
    if(tofahrenheit.checked)
    {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(tocelsuis.checked)
    {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Selects a unit!";
    }
}
