const { Client } = require('pg');

const client = new Client({
    connectionString: `postgresql://${process.env.DB_PG_USER}:${process.env.DB_PG_PASSWORD}@${process.env.DB_PG_HOST}:${process.env.DB_PG_PORT}/${process.env.POSTGRES_DB}`,
});

async function connectPostgres() {
    await client.connect();
    console.log('Postgres connected');
}

module.exports = {
    client,
    connectPostgres,
};