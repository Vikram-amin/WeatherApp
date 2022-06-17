const mongoose = require("mongoose")

const saveSchema = mongoose.Schema({
  city: String,
  Temp: Number,
  Humidity: Number,
  pressure: Number,
  windSpeed: Number,
});

let Save = mongoose.model("Save", saveSchema);

module.exports = Save;