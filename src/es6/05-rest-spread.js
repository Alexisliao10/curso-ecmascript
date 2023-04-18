// arrays destructuring

let fruits = ["Apple,", "Banana"];
let [a, b] = fruits;

console.log(a, b);

// Object destructuring

let user = {
  username: "Alexis",
  age: 24,
};

let {username, age} = user;
console.log(username, age);

// Spread operator

let person = {name: "Alexis", age: 25};
let country = "PA";

let data = {id: 1, ...person, country};
console.log(data);

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3, 4);
