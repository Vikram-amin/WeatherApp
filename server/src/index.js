
const express = require('express')
const app = express()
const cors = require('cors')
const WeatherRoute = require('./Route/weather.route')

app.use(express.json())
app.use(cors())

app.use("/save", WeatherRoute);


module.exports = app