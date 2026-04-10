const express = require('express'); //import express
const router = require('./routes/api');
const db = require('./config/database'); //import database

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

// Tambahkan ENDPOINT API untuk test database
app.get('/test-db', async (req,res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.json({ message: "Koneksi Database Gagal" });
        } else {
            res.json({ 
                message: "Koneksi Database Berhasil",
            results: results 
            });
        }
    });
});

// pindahkan routing ke routes/api.js
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});