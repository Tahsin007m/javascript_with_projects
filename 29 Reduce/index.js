// .reduce() = reduce the elements of an array to a single value

const prices = [6.99, 10.99, 15.99, 99.99];
const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum(accumulator, element)
{
    return accumulator + element;
}