module.exports = app => {
    const controller = app.controllers.stream

    app.route('/api/v1/stream')
    .get(controller.listStream)
}