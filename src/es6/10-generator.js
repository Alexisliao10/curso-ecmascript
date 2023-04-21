function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Alexis", "Ana", "Ulises", "Diana"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
