const MethodNotImplementedError = require('./errors/method_not_implemented_error')

class BaseService {
    /**
     *
     * @param {{object}}data
     * @param {{object}}user
     * @returns {Promise<never>}
     */
    async createItem(data, user) {
        throw new MethodNotImplementedError()
    }

    /**
     *
     * @param id
     * @param {{object}}data
     * @param {{object}}user
     * @returns {Promise<never>}
     */
    async updateItem(id, data, user) {
        throw new MethodNotImplementedError()
    }

    /**
     *
     * @param {string}id
     * @param {{object}}user
     * @returns {Promise<never>}
     */
    async destroyItem(id, user) {
        throw new MethodNotImplementedError()
    }

    /**
     *
     * @param {string}id
     * @param {{object}}user
     * @returns {Promise<never>}
     */
    async getById(id, user) {
        throw new MethodNotImplementedError()
    }

    /**
     *
     * @param {{object}}data
     * @param {{object}}user
     * @returns {Promise<any>}
     */
    async getList(data, user) {
        throw new MethodNotImplementedError()
    }
}

module.exports = BaseService