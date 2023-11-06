require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

mongoose.set('strictQuery', false);
const mongoDB = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.uqtjxjp.mongodb.net/${process.env.CLUSTER}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB)
module.exports = mongoose.connection;
