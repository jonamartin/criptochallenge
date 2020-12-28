class Currencies
{
    constructor(knex)
    {
        this.knex = knex
    }
    async currencies_get(req, res)
    {
        let currencies = await this.knex.select('id','description','symbol').from('currencies');
        res.status(200).json(currencies);
    }
}

module.exports = Currencies;