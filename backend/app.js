const express = require('express');
const connectionToDB = require('./connect');
const productRouter = require('./routes/productRoute')

const app = express();

connectionToDB();

app.use('/api/products/', productRouter);

app.listen(5000, () => console.log("Server has been started!!"))