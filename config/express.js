const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const consign = require('consign')
const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://shinnelo:pLYuYYgPRBZSeONi@gamedb0.gyjxr.mongodb.net/game-db';

module.exports = () => {
    const app = express();

    mongoose.connect(mongoURI, { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true})
        .then(() => {
            console.log('MongoDB Connected');
        })
        .catch(err => {
            console.log(err);
            console.log('MongoDB Not Connected');
        });

    mongoose.set('useFindAndModify', false);

    app.set('port', process.env.PORT || config.get('server.port'))

    // app.use(bodyParser.json())
    app.use(bodyParser());

    consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app)

    return app
}
