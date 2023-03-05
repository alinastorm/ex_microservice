class HttpError extends Error {
    status = 500
    message = 'Internal server error'
    description = 'Внутренняя ошибка сервера'

    constructor(description = null) {
        super();
        this.description = description || this.description
    }
}

module.exports = HttpError