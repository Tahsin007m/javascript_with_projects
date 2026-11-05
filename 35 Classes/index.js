// classes = (ES6 feature) provides a more structured and cleaner way to
//           work with objects compared to traditional constructor functions
//           ex, static keyword, encapsulation, inheritance

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price $${this.price}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("PS5", 599);
const product2 = new Products("MacBook M4", 499);
const product3 = new Products("Mobile Phone", 299);

product1.displayProduct();
//product2.displayProduct();
//roduct3.displayProduct();

const total = product1.calculateTotal(salesTax);

console.log(total);
