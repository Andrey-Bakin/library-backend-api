const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

dotenv.config();

const app = express();

const { PORT, API_URL } = process.env;

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () =>{
    console.log(`Сервер зпущен по адресу ${API_URL}:${PORT}`);
})    