const mongoose = require('mongoose');

async function connectMongo() {
    await mongoose.connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`
    );

    console.log('Mongo connected');
}

module.exports = connectMongo;