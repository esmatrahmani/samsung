var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mobileRouter = require('./routes/mobile')
var exlayout = require ('express-ejs-layouts');
var contactRouter = require('./routes/contact');
var homeAppRouter = require('./routes/homeApp');
var serviceRouter = require('./routes/service');
var ShopRouter = require('./routes/Shop');
var registerRouter = require('./routes/register');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
var tvRouter = require('./routes/tv');

var app = express();

// mongoose connections
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poplib');
var contactmodel = require('./models/contact');
var registermodel = require('./models/register');






// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layout')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(exlayout);
app.use('/', indexRouter);

app.use('/mobile' , mobileRouter);
app.use('/homeApp',homeAppRouter );
app.use('/service' , serviceRouter);
app.use('/Shop', ShopRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/register', registerRouter);
app.use('/contact', contactRouter);
app.use('/tv' , tvRouter);

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

module.exports = app;
