//Types Alias

type StringOrNumber = string | number;

let age: StringOrNumber = 25;
console.log(age);

type Student = {
    name: String,
    age: number,
    id: StringOrNumber
}

const studentDetails = (id: StringOrNumber, studentName: String) =>{
console.log(`This student have id : ${id} and is a student: ${studentName}`);
}
studentDetails(123456, "Tom")

const greet = (user: Student) =>{
    console.log(`Hello ${user.name} you are ${user.age} years old`);
}

greet({
    name: "Tom",
    age: 25,
    id: 123456})