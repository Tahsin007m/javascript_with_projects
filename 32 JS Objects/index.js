// object = A collection of related properties and/or methods
//          Can represent real world objects( people, prodcuts, places)
//          object = {key:value, 
//                   function()}

const person1 = {
    firstName: "Syed", 
    lastName: "Reza",
    age: 22,
    isEmployed: false,
    sayHello: function(){
        console.log("Hi I'm Reza");
    }
}

const person2 = {
    firstName: "Mohammed", 
    lastName: "Ali",
    age: 57,
    isEmployed: true,
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();


console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);