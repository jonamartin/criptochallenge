var express = require('express');
var router = express.Router();
var currencies = require('../controllers/currencies');

/* GET /currencies */
module.exports = (knex) => 
{
    var controller = new currencies(knex)
    router.get('/', (req, res) =>  controller.currencies_get(req, res));
    return router;
}; 