// inheritance = allows a new class to inherit properties and methods
//               from an existing class(parent -> child)
//               helps with code resuability

class Animal{
    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Cat extends Animal{
    name = "Tom";
}

class Mouse extends Animal{
    name = "Jerry";

    runfast(){
        console.log(`This ${this.name} runs very fast`);
    }
}

class Dog extends Animal{
    name = "Spike";

    power(){
        console.log(`This ${this.name} is very powerfull`);
    }
}

const cat = new Cat();
const mouse = new Mouse();
const dog = new Dog();

mouse.eat();
console.log(cat.alive);
dog.sleep();
dog.power();
mouse.runfast();
cat.power(); // will show error, because power only belongs to dog class
