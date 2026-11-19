// rest parameters = (...rest) allow a function work with a variable 
//                    number of arguments by building them into an array

//                    spread = expands an array into seperate elements
//                    rest  = rest collects values into an array (in function definitions)


function greet(greeting, ...names) // one is our parameter, ...name is our rest parameter
{
    names.forEach(names => console.log(`${greeting}, ${names}! `)); // prints each name with a greeting word
}

greet("Hello", "Tahsin", "Evan", "Wasik");

// ==============================
// MINI SHOPPING CART
// ==============================

// Calculates the final bill for a customer after applying a discount.
// customerName    -> name of the customer (regular parameter)
// discountPercent -> discount to apply, e.g. 10 means 10% (regular parameter)
// ...prices       -> REST PARAMETER: collects all remaining arguments into an array

function checkout(customerName, discountPercent, ...prices)
{
    // Add up all the item prices (starts counting from 0, so an empty cart gives 0)
    const total = prices.reduce((sum, price) => sum + price, 0);

    // Subtract the discount amount from the total to get the final price
    const finalPrice = total - (total * discountPercent / 100);

    // Return a summary message (prices.length = number of items bought)
    return `${customerName} bought ${prices.length} items. Total after ${discountPercent}% discount: ${finalPrice}`;
}

// An array of item prices
const cartPrices = [20, 30, 50];

// SPREAD (...cartPrices) expands the array into separate arguments: 20, 30, 50
console.log(checkout("Tahsin", 10, ...cartPrices)); // 3 items, 10% discount
console.log(checkout("Sara", 0, 100, 200));         // 2 items, no discount
console.log(checkout("Ali", 25));                   // empty cart: 0 items, total 0


// ==============================
// HIGHEST NUMBER FINDER
// ==============================

// Returns the largest number from any amount of numbers.
// ...numbers -> REST PARAMETER: collects all arguments into an array
function getHighest(...numbers)
{
    // SPREAD expands the array back into separate values for Math.max
    const highest = Math.max(...numbers);

    // Send the largest value back to the caller
    return highest;
}

console.log(getHighest(4, 9, 2, 7)); // 9
