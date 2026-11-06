// neested objects = Objects inside of other objects.
//                   Allows you to represent more complex data structures
//                   Child Objecct is enclosed by a Parent Object

//                   Person{Address{}, ContactInfo{}}
//                   ShoppingCart{Keyboard{}, Mouse{}, Minotor{}}

const person = {
    fullname: "Tahsin Reza",
    age: 24,
    isStudent: true,
    hobbies: ["Gaming", "Sports", "Coding"],
    address: {
        street: "123 Conct St.",
        city: "Bikini Bottom",
        Country: "Int. Water"
    }
}

console.log(person.address);
