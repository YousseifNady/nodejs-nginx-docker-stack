const { createClient } = require('redis');

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on('error', console.error);

async function connectRedis() {
    await redisClient.connect();
    console.log('Redis connected');
}

module.exports = {
    redisClient,
    connectRedis,
};