// .reduce() = reduce the elements of an array to a single value

/*const prices = [6.99, 10.99, 15.99, 99.99];
const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum(accumulator, element)
{
    return accumulator + element;
}*/

// CART TOTAL WITH TAX

const prices = [100, 250, 150, 500];
const total = prices.reduce(sum, 0);
const finalPrice = (total + total*(10/100));

function sum(add, element)
{
    return  add + element;
}

console.log(`Your total price with 10% added tax is: ${finalPrice}`);


// COUNT PASS AND FAIL

const marks = [45, 80, 33, 92, 28, 60];
const result = marks.reduce((accumulator, marks)=> { 

    if(marks>=40){
        accumulator.pass++;
    }
    else{
        accumulator.fail++;
    }
    return accumulator;
}, {pass: 0, fail: 0});

console.log(result);
