require("dotenv").config();

const express = require('express'); //import express
const router = require('./routes/api');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(router);

// pindahkan routing ke routes/api.js
app.listen(process.env.PORT, () => {
    console.log(`Server sedang berjalan di port ${process.env.PORT}`);
});