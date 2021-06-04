const Game = require("../models/game");

module.exports = app => {
    const controller = {}

    controller.listGame = async (req, res) => {
        const listaJogos = await Game.find({});
        res.status(200).json(listaJogos)
    }
    controller.saveGame = async (req, res) => {
        const lastId = await Game.find().sort({_id: -1}).limit(5);

        const newGame = new Game();
        newGame.id = lastId[0].id + 1;
        newGame.name = req.body.name;
        newGame.year = req.body.year;
        newGame.studio = req.body.studio;
        newGame.platform = req.body.platform;
        newGame.dtZeramento = req.body.dtZeramento;
        newGame.tempo = req.body.tempo;

        await newGame.save(async function(err) {
            if (err)
                throw err;

            res.status(201).json(newGame)
        });
    }

    controller.removeGame = async(req, res) => {
        const {
            id
        } = req.params

        const game = await Game.findOne({ id });

        if(!game){
            res.status(404).json({
                message: 'Game not found',
                success: false
            })
        }
        else {
            await Game.deleteOne({ id });

            res.status(200).json({
                message: 'Game deleted successfully',
                success: true
            })
        }
    }

    return controller
}