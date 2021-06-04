const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    id: Number,
    name: String,
    year: Number,
    studio: String,
    platform: String,
    dtZeramento: String,
    tempo: String,
    coverImg: String
});

module.exports = mongoose.model('Game', gameSchema, 'game');