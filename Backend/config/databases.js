const mysql = require('mysql2');

// Koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
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