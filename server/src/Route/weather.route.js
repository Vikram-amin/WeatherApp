

const express = require('express')
const router = express.Router()
const { saveData , getData } = require("../controllers/weather.controller");

router.post("/", saveData );
router.get("/", getData);

module.exports = router