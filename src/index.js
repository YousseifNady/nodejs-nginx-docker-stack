require('dotenv').config();

const express = require('express');

const connectMongo = require('./config/mongodb');
const { connectRedis, redisClient } = require('./config/redis');
const { connectPostgres } = require('./config/postgres');

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await connectMongo();
        await connectRedis();
        await connectPostgres();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();

app.get('/', async (req, res) => {
    await redisClient.set('test', 'hello docker');
    res.send('Welcome to Docker');
});

app.get('/data', async (req, res) => {
    const data = await redisClient.get('test');
    res.send(`<h1>${data}</h1>`);
});