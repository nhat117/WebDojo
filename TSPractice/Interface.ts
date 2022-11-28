
interface Human {
    name: String,
    age: Number,
    speak(language: string): void
}

class Person implements Human {
    name: String;
    age: Number;

    constructor(name: String, age: Number) {
        this.name = name;
        this.age = age;
    }

    speak(language: string) {
        console.log(`${this.name} speaks ${language}`);
    }
}

bob = new Person("Bob", 30);
bob.speak("English");

const henry: Human = {
    name: "Henry",
    age: 30,
    speak(language: string) {
        console.log(`${this.name} speaks ${language}`);
    }
}

henry.speak("English");