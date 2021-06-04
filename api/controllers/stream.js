module.exports = () => {
    const streamDB = require('../data/stream.json')
    const controller = {}

    const {
        stream: streamMock
    } = streamDB

    controller.listStream = (req, res) => res.status(200).json(streamDB)
    controller.saveStream = (req, res) => {
        streamMock.data.push({
            id: streamDB.stream.data.length + 1, 
            date: req.body.date, 
            video: req.body.video
        })

        res.status(201).json(streamDB)
    }

    controller.removeStream = (req, res) => {
        const {
            id
        } = req.params

        const foundStreamIndex = streamMock.data.findIndex(stream => stream.id == id)

        if(foundStreamIndex === -1){
            res.status(400).json({
                message: 'Stream not found',
                success: false
            })
        }
        else{
            streamMock.data.splice(foundStreamIndex, 1)
            res.status(200).json({
                message: 'Stream deleted successfully',
                success: true
            })
        }
    }
    
    return controller
}