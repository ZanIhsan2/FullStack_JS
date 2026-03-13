const express = require('express'); //import express
const router = require('./routes/api');
const app = express();

app.use(express.json());
app.use(express.urlencoded)

app.use(router);

// daftarkan port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});