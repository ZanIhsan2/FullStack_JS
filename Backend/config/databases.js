const mysql = require('mysql2');

// Koneksi
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_students'
});

// Cek koneksi
db.connect((err) => {
    if (err) {
        console.log("Koneksi gagal:", err);
    } else {
        console.log("Koneksi database berhasil");
    }
});

module.exports = db;