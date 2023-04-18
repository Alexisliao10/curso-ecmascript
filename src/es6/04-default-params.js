function newUser(name, age, country) {
  var name = name || "Alexis";
  var age = age || "23";
  var country = country || "PA";
  console.log(name, age, country);
}

newUser();
newUser("David", 15, "CO");

// ES6
function newAdmin(name = "Alexis", age = "24", country = "PA") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Diana", 22, "PA");
