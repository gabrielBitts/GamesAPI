module.exports = app => {
    const controller = app.controllers.game

    app.route('/api/v1/game')
    .get(controller.listGame)
}