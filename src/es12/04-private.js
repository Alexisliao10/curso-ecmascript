// setter getters

class user3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return "hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper2 = new user3("DAvid", 15);

console.log(bebeloper2.uAge);
console.log((bebeloper2.uAge = 20));
