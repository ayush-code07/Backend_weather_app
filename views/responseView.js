const sendWeatherResponse = (res, data, source) => {
    res.status(200).json({
        source, data
    })
}

const sendErrorResponse = (res, error) => {
    res.status(500).json({
        error: error.message
    })
}

module.exports = {sendWeatherResponse, sendErrorResponse}