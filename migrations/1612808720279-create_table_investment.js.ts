exports.up = function(knex) {
    return knex.schema.createTable('investment', table => {
        table.increments('id').primary();
        table.integer('value',50).notNull();
        table.integer('investment_time',20).notNull();
        table.float('rate_cdi_percent',50).notNull();
        table.integer('profitability_cdb',50).notNull();
        table.integer('profitability_poupanca',50).notNull();
        table.integer('id_user').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('investment');
};