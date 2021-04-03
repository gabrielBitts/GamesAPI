module.exports = () => {
    const gameDB = require('../data/game.json')
    const controller = {}

    controller.listGame = (req, res) => res.status(200).json(gameDB)

    return controller
}