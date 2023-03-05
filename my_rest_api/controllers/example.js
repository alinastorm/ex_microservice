const BaseController = require('../base/base_controller')
const ExampleService = require('../base/base_service')
module.exports = new BaseController(new ExampleService())