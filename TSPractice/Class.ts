export class Person {
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
    constructor(
        public name: string,
        public age: number,
        private password: string,
        readonly isAdult: boolean = age >= 18
        ) { }
    
      public greet() {
        console.log(`Hello, my name is ${this.name}`);
      }
    
      public changePassword(newPassword: string) {
        this.password = newPassword;
      }
    }
    
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