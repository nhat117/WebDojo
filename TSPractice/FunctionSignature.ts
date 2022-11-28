/* 
    Function Signatrue
*/

// let greet: function;

// // greet = () => {
// //     console.log("Hello, again");
// // }
// // greet()

let greet : (a: String, b: String) => void ;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

greet("mario", "hello")

let calculate( a: number, b: number, c: string) => number;

calculate = (numOne: number, numTwo: number, action: string) => {
    if(action === "add"){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

console.log(calculate(10, 7, "add"));

type Student = {name: string, age: number, grades: number[]}

let print_student = (student: Student) => {
    console.log(`${student.name} is ${student.age} years old`);
}

print_student({name: "mario", age: 23, grades: [20, 30, 40]})