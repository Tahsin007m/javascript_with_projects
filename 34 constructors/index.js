// constructor =  special method for defining the
//                properties and methods of objects

function Car(make, model, year, color)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)};
}

const car1 = new Car("Buggati", "Chiron", 2018, "Black");
const car2 = new Car("Ferrari", "La Ferrari", 2024, "Red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

car2.drive();