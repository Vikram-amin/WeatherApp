
const Save = require('../model/weather.model')


const saveData = async (req, res) => {
    const data = req.body
    const newdata = new Save(data)

  try {
    await newdata.save()
    res.status(200).json(newdata);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    let data = await Save.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveData,
  getData,
};