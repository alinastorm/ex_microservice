const HttpError = require('./http_error')

class MethodNotImplementedError extends HttpError {
    status = 405
    message = 'Not implemented'
    description = 'Метод не рализован'
}

module.exports = MethodNotImplementedError