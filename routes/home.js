const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Message = require('../messageModel')
const dbConnection = require('../dbConnection')


router.get('/', async (req, res) => {
  try {
    const messages = await Message.find()
    res.render('home', { title: 'Mini Message Board', messages: messages });
  } catch {
    (err) => console.log(err);
  }
});

module.exports = router;
