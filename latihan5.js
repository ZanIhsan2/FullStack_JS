// Spread syntax
const user = {
    name: "Teknik Informatika",
    major: "TI",
};

const newUser = {
    // name: user.name,
    ...user,
    age: 22
};