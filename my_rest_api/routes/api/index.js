/**
 * index.js – без обработки запросов, транзитные, которые сканируют директорию и формируют маршруты
 */
const router = require('express').Router()
const getModules = require('../base/get_routes')
getModules(__dirname, router)
module.exports = router