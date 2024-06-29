// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Employee = require('./models/Employee');
const Database = require('./db')

const app = express();
const port = 3000;

Database();
app.use(express.json());


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));




//Routes
const indexRoutes = require('./routes/index');
app.use('/api', indexRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
