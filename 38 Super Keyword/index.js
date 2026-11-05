// super = keyword is used in classes to call the constructor or access
//         the properties and methods of a parent(superclass)
//         this = this object
//         super = the parent

class Animal{

    constructor(name, age){
        this.name= name;
        this.age = age;
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const r1 = new Rabbit("Raby", 2, 25);
const f1 = new Fish("Rui", 1, 12);
const h1 = new Hawk("Aurora", 2, 50);

