/**
 * index.js – индексные файлы с обработкой запросов, которые делают то же самое что и первые, а также обрабатывают запросы методов http (GET, POST etc.)
 */
const router = require('express').Router()
const getRoutes = require('../../base/get_routes')
const baseCrud = require('../../base/base_crud')
const exampleController = require('../../controllers/example')

getRoutes(__dirname, router)
baseCrud(router, exampleController)

module.exports = router