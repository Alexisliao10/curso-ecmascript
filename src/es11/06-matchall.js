const regex = /\b(Apple)+\b/g;

const fruits = "Apple, Banana, Kiwi, Apple, orange, etc, etc, etc.";

for (const match of fruits.matchAll(regex)) {
  console.log(match);
}
