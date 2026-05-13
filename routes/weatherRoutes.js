const express = require('express')
const router = express.Router()
const { getWeather } = require('../controllers/weatherControllers')

router.get('/weather/:city', getWeather)

module.exports = router