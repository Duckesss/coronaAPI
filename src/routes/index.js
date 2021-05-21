const { Router } = require('express')
const CoronaController = require('../controllers/CoronaController')
const routes = Router()

routes.get("/ping", (req,res) => res.send("pong"))
routes.get("/lastSixMonths", CoronaController.getSixMonths)
routes.get("/getWeek/:qtdWeeks", CoronaController.getWeek)

module.exports = routes