const express = require('express');
const createError = require("http-errors");
const router = express.Router();
const app = express();
const logger = require('morgan');
const homeRouter = require('./routes/home');
const newMessageRouter = require('./routes/newMessage');
const port = 3000;
const Message = require('./db/messageModel')



// view engine setup
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);
app.use('/newMessage', newMessageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });   
 
app.listen(port);
module.exports = app;
