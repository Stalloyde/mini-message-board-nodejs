const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Message = require('../messageModel')
const dbConnection = require('../dbConnection')

router.get('/', async (req, res) => {
  try {
    const messages =  await Message.find()
    res.render('newMessage', {
      title: 'Mini Message Board',
      subtitle: 'New Message',
      messages: messages,
    });
  } catch {
    (err) => console.log(err)
  };
});

router.post('/', async (req, res) => {
  try {
    const newUser = req.body.name;
    const newText = req.body.message;
    const messages =  await Message.find()
    const newMessage = new Message({
      index: messages.length ,
      text: newText,
      user: newUser,
      added: new Date(),
    });
    
    newMessage.save().then(res.redirect('/'))
    } catch {
      (err) => console.log(err)
    };
});

module.exports = router;
