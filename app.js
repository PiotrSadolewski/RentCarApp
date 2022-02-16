var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const carsRouter = require('./routes/carsRoute');
const clientsRouter = require('./routes/clientsRoute');
const rented_carsRouter = require('./routes/rented_carsRoute');

const clientApiRoute = require('./routes/api/CarAPIRoute');
const carApiRoute = require('./routes/api/CarAPIRoute');
const rentedCarApiRoute = require('./routes/api/CarAPIRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/cars', carApiRoute);
app.use('/api/clients', clientApiRoute);
app.use('/api/rentedcars', rentedCarApiRoute);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/clients', clientsRouter);
app.use('/rented_cars', rented_carsRouter);

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

const sequelizeInt = require('./config/sequelize/init');
sequelizeInt().catch(err => {
  console.log(err);
});

module.exports = app;
