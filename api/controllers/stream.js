var id = require('uuid/v4')

module.exports = () => {
    const streamDB = require('../data/stream.json')
    const controller = {}

    const {
        stream: streamMock
    } = streamDB

    id = id().replace(/[^0-9]/g, '')

    controller.listStream = (req, res) => res.status(200).json(streamDB)
    controller.saveStream = (req, res) => {
        streamMock.data.push({
            id: parseInt(id), 
            date: req.body.date, 
            video: req.body.video
        })

        res.status(201).json(streamDB)
    }
    return controller
}
