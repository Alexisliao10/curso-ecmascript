// declarando
class User {}
// instacia de una clase
// const newUser = new User();

class user {
  // metodos
  greeting() {
    return "Hello";
  }
}

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user1 {
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello";
  }
}

const david = new user1();

// this

class user2 {
  constructor(name) {
    this.name = name;
  }

  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user2("Ana");
console.log(ana.greeting());

// setter getters

class user3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper2 = new user3("DAvid", 15);

console.log(bebeloper2.uAge);
console.log((bebeloper2.uAge = 20));
