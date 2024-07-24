const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1" } = process.env;


app.listen(PORT, () =>{
    console.log(`Сервер зпущен по адресу ${API_URL}:${PORT}`);
})    