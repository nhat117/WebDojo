"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    //   public name: string;
    //   public age: number;
    //   readonly isAdult: boolean;
    //   private password: string;
    //   constructor(name: string, age: number, password: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.password = password;
    //     this.isAdult = age >= 18;
    //   }
    // Another way to define constructor
    function Person(name, age, password, isAdult) {
        if (isAdult === void 0) { isAdult = age >= 18; }
        this.name = name;
        this.age = age;
        this.password = password;
        this.isAdult = isAdult;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    Person.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    return Person;
}());
exports.Person = Person;
// const person = new Person("John", 20, "123456");
// console.log(person.name); // John
// console.log(person.age); // 20
// // console.log (person.password); // Error: Property 'password' is private and only accessible within class 'Person'
// person.greet(); // Hello, my name is John
// person.changePassword("1234567");
// console.log(person )
// // person.password = "1234567"; // Error: Cannot assign to 'password' because it is a read-only property.
// const bob = new Person("Bob", 30, "123456");
// console.log(bob); // Bob
// //Array
// const persons: Person[] = [bob, person];
// console.log(persons); 
