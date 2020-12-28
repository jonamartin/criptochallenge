class Rate
{
    constructor(id, id_currency, value, created_at, currency) 
    {
        this.id = id;
        this.id_currency = id_currency;
        this.value = value;
        this.created_at = created_at;
        this.currency = currency;
    }
}
module.exports = Rate;