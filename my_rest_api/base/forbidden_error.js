const HttpError = require('./http_error')

class ForbiddenError extends HttpError {
    status = 403
    message = 'Forbidden'
    description = 'Данный ресурс вам недоступен'
}

module.exports = ForbiddenError