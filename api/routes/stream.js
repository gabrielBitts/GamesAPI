module.exports = app => {
    const controller = app.controllers.stream

    app.route('/api/v1/stream')
    .get(controller.listStream)
    .post(controller.saveStream)

    app.route('/api/v1/stream/:id')
    .delete(controller.removeStream)
}