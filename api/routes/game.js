module.exports = app => {
    const controller = app.controllers.game

    app.route('/api/v1/game')
    .get(controller.listGame)
    .post(controller.saveGame)

    app.route('/api/v1/game/:id')
    .delete(controller.removeGame)
}