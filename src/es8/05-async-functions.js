const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Async", 2000))
      : reject(new Error("Error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
};

console.log("Before");
anotherFn();
console.log("after");

// el codigo se ejecuta normal aun cuando la funcion no recibe el paramentro despues de 2s, esto es funcion asincrona.
