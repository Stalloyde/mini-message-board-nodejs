#! /usr/bin/env node
const mongoose = require('mongoose')
const Message = require('./messageModel')
const dbConnection = require('./dbConnection')

main().catch((err) => console.log(err));

async function createNewMessage(index, text, user, added) {
    const message = new Message({index: index, text: text, user: user, added: added})
    await message.save()
    console.log('Added message:' + message)
}

async function populateDB() {
    await Promise.all([    
        createNewMessage(0, 'Hi there!','Amando', new Date()),
        createNewMessage(1, 'Hello World!','Charles', new Date()),
    ]
)}

async function main() {
    console.log('Debug: About to connect');
    console.log('Debug: Should be connected?');
    Message.deleteMany({index: {$gte:0}}).then(console.log('Deleted'))
    await populateDB();
    console.log('Debug: Closing mongoose');
    mongoose.connection.close();
}

