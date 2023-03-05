const BaseService = require('../base/base_service')

class Example extends BaseService {

    async getList(data, user) {
        return [{itemName: 'SomeItem'}]
    }

    async getById(id, user) {
        return {itemName: 'SomeItem'}
    }

    async createItem(data, user) {
        return {itemName: 'SomeItem'}
    }

    async destroyItem(id, user) {
        return {}
    }

    async updateItem(id, data, user) {
        return {itemName: 'SomeItem'}
    }

}

module.exports = Example