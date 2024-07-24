const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const notFound = require('./middlewares/notFound');
const originalUrl = require('./middlewares/originslUrl');
const app = express();
dotenv.config();



const { PORT, API_URL } = process.env;

app.use(userRouter);
app.use(bookRouter);
app.use(notFound);
app.use(originalUrl);

app.listen(PORT, () =>{
    console.log(`Сервер зпущен по адресу ${API_URL}:${PORT}`);
})    