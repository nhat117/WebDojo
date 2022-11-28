/* Explicit Types */

let namee: String = "Huan"
let agee: Number = 25
let isStudent: Boolean = true

let arr: String[] = ['a', 'b', 'c']

//mixed
let mixed: (String | Number | Boolean)[] = ['a', 1, true]
mixed.push('b')
mixed.push(2)
console.log(mixed)

let id : String | Number = 12

id = "Aaaa"
console.log(id)

let person: object = {
    name:'henry',
    age:14
}

let student : {
    name: String,
    age: Number,
    isStudent: Boolean
} 

student = {name:'henryn',age:14,isStudent:true}

//Any Types
const h : any = 'sga';
h = 22
console.log(h)