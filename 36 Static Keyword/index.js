// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects creaeted
//          from that class(class owns anything static, not the objects)

class MathUtil{
    static PI = 3.1416;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return (this.PI * 2 * radius);
    }
    static getArea(radius){
        return (this.PI * radius * radius);
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
}

const user1 = new User("Reza");
const user2 = new User("Raza");
const user3 = new User("Taza");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);
