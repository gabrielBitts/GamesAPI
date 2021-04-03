var id = require('uuid/v4')

module.exports = app => {
    const gameDB = require('../data/game.json')
    const controller = {}

    const {
        game: gameMock
    } = gameDB

    id = id().replace(/[^0-9]/g, '')
    
    controller.listGame = (req, res) => res.status(200).json(gameDB)
    controller.saveGame = (req, res) => {
        gameMock.data.push({
            id: parseInt(id),
            name: req.body.name,
            year: req.body.year,
            studio: req.body.studio
        })

        res.status(201).json(gameDB)
    }

    return controller
}