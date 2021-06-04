module.exports = app => {
    const gameDB = require('../data/game.json')
    const controller = {}

    const {
        game: gameMock
    } = gameDB
    
    controller.listGame = (req, res) => res.status(200).json(gameDB)
    controller.saveGame = (req, res) => {
        gameMock.data.push({
            id: gameDB.game.data.length + 1,
            name: req.body.name,
            year: req.body.year,
            studio: req.body.studio,
            platform: req.body.platform,
            dtZeramento: req.body.dtZeramento,
            tempo: req.body.tempo
        })

        res.status(201).json(gameDB)
    }

    controller.removeGame = (req, res) => {
        const {
            id
        } = req.params

        const foundGameIndex = gameMock.data.findIndex(game => game.id == id)

        if(foundGameIndex === -1){
            res.status(404).json({
                message: 'Game not found',
                success: false
            })
        }
        else {
            gameMock.data.splice(foundGameIndex, 1);
            res.status(200).json({
                message: 'Game deleted successfully',
                success: true
            })
        }
    }

    return controller
}