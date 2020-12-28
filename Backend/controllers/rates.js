const Rate = require("../models/rate");
const rates = require("../routes/rates");

class Rates
{
    constructor(knex)
    {
        this.knex = knex
    }
    async rates_post(req, res)
    {
       let rate = 
       {
           'id_currency' : req.body.id_currency,
           'value' : req.body.value,
           'created_at' : new Date().toISOString().slice(0, 19).replace('T', ' ')
       }
       await this.knex('rates').insert(rate);
       res.send(201);
    }

    async rates_get_last_rates(req, res)
    {
        let currencies = await this.knex.select('id','description','symbol').from('currencies');
        let rates = await Promise.all(currencies.map(currency => this.knex.select('id', 'id_currency','value','created_at')
        .from('rates')
        .where({id_currency : currency.id})
        .orderBy('created_at','desc').limit(1)))
        let result = [];        
        for(let i = 0; i < rates.length;i++)
        {
            if(rates[i][0])
            {
                rates[i][0].currency = currencies.find( currency => currency.id === rates[i][0].id_currency);
                rates[i][0].created_at = new Date(rates[i][0].created_at).toISOString().slice(0, 19).replace('T', ' ');
                result.push(rates[i][0]);
            }            
        }
        res.status(200).json(result);        
    }

    async rates_get_by_symbol(req,res)
    {
        let rate = await this.knex.select('rates.id','id_currency','currencies.description','value','created_at')
        .from('rates')
        .innerJoin('currencies','rates.id_currency','currencies.id')
        .where({
            'currencies.symbol': req.params.symbol.toUpperCase()
        })
        .orderBy('created_at','desc')
        .limit(1)
        rate = rate[0];
        let result = 
        {
            'id': rate.id,
            "id_currency": rate.id_currency,
            "value": rate.value,
            "created_at": new Date(rate.created_at).toISOString().slice(0, 19).replace('T', ' '),
            "currency" : {
                "id": rate.id_currency,
                "description": rate.description,
                "symbol" : req.params.symbol.toUpperCase()
            }
        }
        res.status(200).json(result);
    }
}

module.exports = Rates;