var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Steplix2020',
      database : 'cripto'
    }
});


var currencies = require('./routes/currencies');
var rates = require('./routes/rates');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/currencies', currencies(knex));
app.use('/rates', rates(knex));



module.exports = app;
