var express = require('express');
var router = express.Router();
var rates = require('../controllers/rates');

/* POST /rates */
module.exports = (knex) => 
{
    var controller = new rates(knex)
    router.post('/', (req, res) => controller.rates_post(req, res));
    router.get('/', (req,res) => controller.rates_get_last_rates(req,res));
    router.get('/:symbol', (req, res) => controller.rates_get_by_symbol(req,res));
    return router;
}; 