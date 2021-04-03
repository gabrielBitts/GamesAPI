module.exports = () => {
    const streamDB = require('../data/stream.json')
    const controller = {}

    controller.listStream = (req, res) => res.status(200).json(streamDB)

    return controller
}