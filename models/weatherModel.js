const redisClient = require('../config/redisClient')
const axios = require('axios')


const getWeatherDataFromCache = async (city) => {
    try {
        const cachedData = await redisClient.get(city)
        return cachedData ? JSON.parse(cachedData) : null
    } catch (error) {
        console.error("Error retrieving data from the redis cache: ", error)
        throw new Error("Error retrieving data from redis")
    }
}

const saveWeatherDataToCache = async (city, data) => {
    try {
        await redisClient.set(city, JSON.stringify(data), "EX", 5)
    } catch (error) {
        console.error("Error saving data to redis", error)
        throw new Error("Error saving to redis")
    }
}

const getWeatherDataFromAPI = async (city) => {
    const apiKey = process.env.WEATHER_API_KEY
    const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
    // encodeURIComponent() is a standard safety measure to ensure your API request doesn't break or get misinterpreted by the server.
    const url = `${baseUrl}${encodeURIComponent(city)}?unitGroup=metric&key=${apiKey}&contentType=json&include=days`;
    
    try {
        const apiResponse = await axios.get(url)
        const weatherData = apiResponse.data
        return weatherData
    } catch (error) {
        console.error("Error fetching data from API:", error)
        throw new Error("Error fetching from API")
    }
}

const getWeatherModel = async (city) => {
    try {
        const cachedData = await getWeatherDataFromCache(city)
        if(cachedData){
            console.log(`Data for the ${city} is fetch from redis cache.`)
            return { source: 'cache', data: cachedData }
        }

        const weatherData = await getWeatherDataFromAPI(city)
        await saveWeatherDataToCache(city, weatherData)
        console.log(`Data for ${city} is fetch from API and saved to redis cache.`)
        return { source: 'api', data: weatherData }
    } catch (error) {
        console.error("Unable to get weather data", error.message)
        throw new Error("Failed to get weather data")
    }
}

module.exports = getWeatherModel