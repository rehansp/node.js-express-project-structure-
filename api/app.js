const express = require('express');
const app = express();
const con = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
require('./routes/todo.routes')(app);
// app.use('/list',todoRoutes);


module.exports = app;

