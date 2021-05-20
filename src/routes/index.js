const { Router } = require('express')
const CoronaController = require('../controllers/CoronaController')
const routes = Router()

routes.get("/ping", (req,res) => res.send("pong"))
routes.get("/lastSixMonths", CoronaController.getSixMonths)

module.exports = routes