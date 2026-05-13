const responseView = require('../views/responseView')
const getWeatherModel = require('../models/weatherModel')

const getWeather = async (req, res) => {
    const city = req.params.city
    // Always use 'return' with res.send/json to stop the function execution
    if (!city) return responseView.sendErrorResponse(res, "City is required")

    try {
        const weatherData = await getWeatherModel(city)
        return responseView.sendWeatherResponse(res, weatherData.data, weatherData.source)
    } catch (error) {
        return responseView.sendErrorResponse(res, error)
    }
}

module.exports = { getWeather }