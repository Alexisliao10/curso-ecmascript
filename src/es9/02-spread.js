const user = {
  username: "gndx",
  age: 23,
  country: "PA",
};
const {username, ...values} = user;

console.log(username);
console.log(values);
