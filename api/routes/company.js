module.exports = app => {
    const controller = app.controllers.company

    app.route('/api/v1/company')
    .get(controller.listCompany)
}