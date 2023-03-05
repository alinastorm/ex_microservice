class BaseController {
    /**
     * {BaseService}
     */
    service

    /**
     *
     * @param {BaseService}service
     */
    constructor(service) {
        this.service = service
    }

    /**
     * Обработка результата работы сервиса и возврат его клиенту
     * @param {Promise<any>}serviceMethod
     * @param req
     * @param res
     */
    sendReplay(serviceMethod, req, res) {
        serviceMethod
            .then(result => res.json(result))
            .catch(error => {
                req.log.child({module: 'controller'}).error(error)
                res.status(error.status || 500)
                    .json({status: error.status, message: error.message, description: error.description})
            })
    }

    /**
     * Обзаботка запроса на получение одной сущности по уникальному идентификатору id
     * @param req
     * @param res
     */
    show(req, res) {
        this.sendReplay(this.service.getById(req.params.id, req.user), req, res)
    }

    /**
     * Обзаботка запроса на получение листа сущностей по пареметрам фильтра, указанным в query
     * @param req
     * @param res
     */
    index(req, res) {
        this.sendReplay(this.service.getList(req.query, req.user), req, res)
    }

    /**
     * Обзаботка запроса на создание сущности из данных переданных в body
     * @param req
     * @param res
     */
    store(req, res) {
        this.sendReplay(this.service.createItem(req.body, req.user), req, res)
    }

    /**
     * Обзаботка запроса на обновление сущности из данных переданных в body с идентификацией ее по id
     * @param req
     * @param res
     */
    update(req, res) {
        this.sendReplay(this.service.updateItem(req.params.id, req.body, req.user), req, res)
    }

    /**
     * Обзаботка запроса на удаление сущности по ее id
     * @param req
     * @param res
     */
    destroy(req, res) {
        this.sendReplay(this.service.destroyItem(req.params.id, req.user), req, res)
    }
}

module.exports = BaseController