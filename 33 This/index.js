// this = reference to the object where THIS is used
//        (object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Tahsin",
    favFood: "Pizza",
    sayHello: function(){
        console.log(`Hi I'm ${this.name}`) // this is an reference to the object we are within
    },
    eat: function(){
        console.log(`I am now eating ${this.favFood}`)
    }
}

const person2 = {
    name: "Maliha",
    favFood: "Donuts",
    sayHello: function(){
        console.log(`Hi I'm ${this.name}`) // this is an reference to the object we are within
    },
    eat: function(){
        console.log(`I am now eating ${this.favFood}`)
    }
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();