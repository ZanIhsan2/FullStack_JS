// rest parameters = menggabungkan semua parameter kedalam
// karakter ... dan sifatnya unlimited parameter value
function sum(...numbers){
    let hasil = 0;

    for (const numer of numbers) {
        hasil += numbers;
    }
    return hasil;
}

console.log(sum(1,2,3,4));