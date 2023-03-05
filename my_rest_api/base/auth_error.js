const HttpError = require('./http_error')

class AuthError extends HttpError {
    status = 401
    message = 'Not authorized'
    description = 'Вы неавторизованы'
}

module.exports = AuthError