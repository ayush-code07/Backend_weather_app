const express = require('express')
const app = express()
const { rateLimit } = require('express-rate-limit')
const weatherRoutes = require('./routes/weatherRoutes')
const dotenv = require('dotenv')

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100
})

dotenv.config()
app.use(limiter)

const port = process.env.PORT || 3000

app.use('/', weatherRoutes)

app.listen(port, () => {
    console.log("Server is running")
})