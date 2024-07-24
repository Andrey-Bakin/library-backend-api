const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const notFound = require("./middlewares/notFound");
const originalUrl = require("./middlewares/originslUrl");
const app = express(); 

dotenv.config();

const { PORT, API_URL, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

 app.use(cors());
app.use(bodyParser.json());
app.use(originalUrl);
app.use(userRouter);
app.use(bookRouter);
app.use(notFound);


app.listen(PORT, () => {
    console.log(`Север запущен по адресу ${API_URL}:${PORT}`);
  });
