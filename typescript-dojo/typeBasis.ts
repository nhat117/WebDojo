// Type Basics
let myName = 'henry'
let age = 25
let isStudent = true

// Arrays
myName = "Name"
age = 26
isStudent = false

//Function
let greet: Function

greet = () => console.log('hello, world')

greet()

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}
// Function
const minus = (a:number, b: number): number => a - b

console.log(minus(4, 3))

//Array and object

let named = ["Mai","Nam","Hung"]

named.push("Hoa")

let numbers = [1,2,3,4]
numbers[3] = 5

//Mixed array
let mixed = ["Hi",3]

mixed.push("Hello")
mixed.push(4)
// mixed.push({a:'2',b:'3'})

//Object
let person = {
    name: "Mai",
    age: 25,
    isStudent: true
}

person.name = "Nam"

person = {
    name: "Hung",
    age: 26,
    isStudent: false
}

//Explicit types
let myName: string = "T"
let age: number = 30
let isStudent: boolean = false


//Arraus
let students: string[] = ["Mai","Nam","Hung"]
students.push("Hoa")

//Union

let mixed: (string| number | true)

let hobby: 'book' | 'music'
hobby = 'book'

//Object 
let person: object = {name : 'henry',age :30}

// person = []

let student: {
    name: string, 
    age: number,
}

//Any types
let age: any = 25
age = "Henry"

let mixed: any[] = []

mixed.push(5)
mixed.push("Hello")
mixed.push(true)

console.log(mixed)

// Type Alias

type stringORNum = string | number;

type student = {name: string; age: number};


const studentDetails = (id:stringORNum, student: student) => {
    console.log(`${student.name} has an id of ${id} and is ${student.age} years old`);
}

studentDetails(20, {name: 'Mai', age: 25});

// Function signature
//This is only a function signature
let greet: (a: string, b: string) => void

greet = (name: string, age: string) =>  {
    console.log(`Hello, ${name}! You are ${age} years old.`)
}
greet("Mai", "25")

let calc: (a:number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => action === 'add' ? numOne + numTwo : numOne - numTwo

console.log(calc(4, 3, "add"))

type student = {name: string, age: number, isStudent: boolean}

let print: (student: student) => void

print = (student: student) => {
    console.log(student.name)
    console.log(student.age)
    console.log(student.isStudent)
}

print({name: "Mai", age: 25, isStudent: true})