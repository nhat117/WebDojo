//Generics

function echo(data: any) {
  return data;
}

console.log(echo("Max"));

type Echo = <T>(data: T) => T;

type numarr = Array<number>;

const last = (arr: numarr) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
console.log(l);

const echod: Echo = <T>(data: T) => {
  return data;
};

const adsgas5 = echod("sadg");
console.log(adsgas5);

console.log(echod("Something"));

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT("b");
const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY("a", "b");
const m6 = makeArrXY("a", 3);
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple("a", 3);
const m9 = makeTuple<string, number>("a", 3);
console.log(m7);

const m10 = makeTuple<string | null, number>(null, 3);

const makeTuppleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTuppleWithDefault("a", 3);
const m12 = makeTuppleWithDefault("a", "b");
const m13 = makeTuppleWithDefault<string | null>("a", 3);

//Generics Extends

const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const makeFullNameConstraint = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const n1 = makeFullName({ firstName: "Max", lastName: "Swan", age: 30, job: "developer" });
const n2 = makeFullNameConstraint({ firstName: "Max", lastName: "Swan", age: 30 });

console.log(n1);
console.log(n2);

//Generics with Classes
class Employee {
  constructor(public firstName: string, public lastName: string) {}
}

const el = <T extends Employee>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const e1 = el(new Employee("Max", "Swan"));
console.log(e1);

const addNewEmployee = <T extends object>(employee: T): T => {
  const uuid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uuid,
  };
};

const e2 = addNewEmployee({ name: "Max", age: 30, occupation: "Chimney sweep" });
console.log(e2);

const addNewEmployee2 = <T extends { name: string }>(employee: T): T => {
  const uuid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uuid,
  };
};
//Generics in interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk", "toilet roll"],
};

type numberResource = Resource<number[]>;

const docFive: numberResource = {
  uid: 1,
  resourceName: "shoppingList",
  data: [1, 2, 3],
};

console.log(docThree, docFour, docFive);
