const express = require('express')
const ExpressPinoLogger = require('express-pino-logger')
const cookieParser = require('cookie-parser')
const pino = ExpressPinoLogger({
    serializers: {
        req: (req) => ({
            method: req.method,
            url: req.url,
            user: req.raw.user,
        }),
    },
})
const app = express()
app.use(pino)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/', require('./routes'))
app.use((req, res, next) => {
    res.status(404)
        .json({
            code: 404,
            title: `That resource  "${req.url}"  was not found`,
            description: `Ресурс "${req.url}" не найден`
        })
})
module.exports = app