const express = require('express');
require("dotenv").config();
require("./src/config/db-config");

const port = process.env.SERVER_PORT;

const todoListRoute = require('./src/route/todo.route.js');

const app = express();
app.use(express.json());
app.use('/api/v1', todoListRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})