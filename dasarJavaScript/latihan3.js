// Contoh Object
const user = {
// Name = Key
// Informatika = Value
    // name: "Informatika",
    // age: 22,
    // major: "TI"
// Destructing memisahkan key dari object agar dapat
// digunakan atau diambil salah satu key saja
body: {
    name: "Informatika",
    age: 22,
    major: "TI"
},
};

const name = user.body.name;
const age = user.body.age;
const major = user.body.major;
console.log(user.name, user["age"]);
console.log(name, age, major);