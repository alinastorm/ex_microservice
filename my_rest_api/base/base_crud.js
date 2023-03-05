/**
 *
 * @param {Router}router
 * @param {BaseController}controller
 */
function baseCrud(router, controller) {
    router.get('/', (req, res, next) => controller.index(req, res, next))
        .post('/', (req, res, next) => controller.store(req, res, next))
        .get('/:id', (req, res, next) => controller.show(req, res, next))
        .put('/:id', (req, res, next) => controller.update(req, res, next))
        .delete('/:id', (req, res, next) => controller.destroy(req, res, next))
}

module.exports = baseCrud