const fs = require('fs')
const path = require('path')
/**
 * Первый метод getRoutes формирует маршруты на основе структуры папок, он вызывается в модулях в директории routes.
 * Метод сканирует текущую директорию и подгружает модули в директиву use.
 * @param {string}dirName
 * @param {object}router
 */
module.exports = (dirName, router) => {
    const basename = 'index.js'
    fs.readdirSync(dirName)
        .filter(item => {
            return (item.indexOf('.') !== 0) && (item !== basename)
        })
        .forEach(item => {
            const itemBody = require(path.join(dirName, item))
            let pathName = fs.lstatSync(path.join(dirName, item)).isDirectory() ? item : item.replace('.js', '')
            router.use('/' + pathName, itemBody)
        })
}