const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}]

fruits[0].name

console.log(fruits[0].name);
console.log(fruits[3].color);

fruits.pop(); // removes the last object, pineapple
fruits.push({name: "grapes", color: "purple", calories: 62}); // adds grapes in the last index

//fruits.splice(3); // only show 3 elements

console.log(fruits);

fruits.forEach(fruit => console.log(fruit.calories));

const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);
