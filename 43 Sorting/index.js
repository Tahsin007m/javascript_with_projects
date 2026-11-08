// sort() = method used to sort elements of an array in place.
//          sorts element as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbol) as strings

//let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

//fruits.sort();

//console.log(fruits);

const warriors = [{name: "tahsin", age: 24, gpa: 3.35},
                 {name: "goku", age: 38, gpa: 3.25},
                 {name: "vegeta", age: 42, gpa: 3.42},
                 {name: "jiren", age: 50, gpa: 2.46},
                 {name: "gohan", age: 28, gpa: 4.00}]

//warriors.sort((a, b) => a.age - b.age); // ASCENDING ORDER FOR AGE
//warriors.sort((a, b) => b.age - a.age); // DESCENDING ORDER FOR AGE

warriors.sort((a, b) => a.name.localeCompare(b.name));

console.log(warriors);
