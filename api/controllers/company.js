module.exports = () => {
    const companyDB = require ('../data/company.json')
    const controller = {}

    controller.listCompany = (req, res) => res.status(200).json(companyDB)

    return controller
}