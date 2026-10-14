// .checked =  property that determines the checked state of an 
//             HTML checkbox or a radio button element

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymenresult = document.getElementById("paymenresult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent = `You are subscribed`;
    }
    else{
        subresult.textContent = `You are not subscribed`;
    }

    if(visabtn.checked){
        paymenresult.textContent = `You are paying with Visa`;
    }
    else if(mastercard.checked){
        paymenresult.textContent = `You are paying with MasterCard`;
    }
    else if(paypalbtn.checked){
        paymenresult.textContent = `You are paying with PayPal`;
    }
    else{
        paymenresult.textContent = `You must select a payment`;
    }
}
