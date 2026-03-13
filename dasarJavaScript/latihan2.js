// Function deklaration
// Setiap fungsi dapat mendeklarasikan parameter
// Parameter biasanya digunakan untuk proses input nilai
function getAge(bod){
    const year = 2022;
    const age = 2022 - bod;
// Return value untuk fungsi yang mengembalikan nilai proses
    return age;
}

// fungsi Expression
const getAge2 = function(bod){
    const year = 2022;
    const age = 2022 - bod;
// Return value untuk fungsi yang mengembalikan nilai proses
    return age;
}

// Arrow Function
const getAge3 = (bod) => {
    const year = 2022;
    const age = 2022 - bod;
// Return value untuk fungsi yang mengembalikan nilai proses
    return age;
}

console.log(getAge(1997));
console.log(getAge2(2002));
console.log(getAge3(1990));