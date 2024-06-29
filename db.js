const express = require('express');
const mongoose = require('mongoose')


const dbURL = "mongodb://localhost:27017/party"

const connectDB = () => {
    try {
        mongoose.connect(dbURL)
        console.log("Database Connected Successfully!!")
    } catch (error) {
        console.log(error)
    }
};


module.exports = connectDB;
